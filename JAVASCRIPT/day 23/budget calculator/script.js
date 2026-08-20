let allIncome = [];
let allExpenses = [];
let budgetLimit = "";
let currentUser = getCurrentUser();

function loadData() {
    var saved = localStorage.getItem(getDataKey(currentUser.email));
    if (saved === null) {
        return;
    }
    var data = JSON.parse(saved);
    allIncome = data.income;
    allExpenses = data.expenses;
    budgetLimit = data.limit;
}

function saveData() {
    var data = {
        income: allIncome,
        expenses: allExpenses,
        limit: budgetLimit
    };
    localStorage.setItem(getDataKey(currentUser.email), JSON.stringify(data));
}

function showAuthScreen() {
    document.getElementById("authScreen").classList.remove("hidden");
    document.getElementById("appScreen").classList.add("hidden");
}

function showAppScreen() {
    document.getElementById("authScreen").classList.add("hidden");
    document.getElementById("appScreen").classList.remove("hidden");
    document.getElementById("userGreeting").textContent = "Hi, " + currentUser.name;
}

document.getElementById("logoutBtn").addEventListener("click", function () {
    setCurrentUser(null);
    window.location.href = "home.html";
});

function startApp() {
    loadData();
    showAppScreen();
    document.getElementById("budgetLimit").value = budgetLimit;
    render();
}



function money(amount) {
    return amount.toLocaleString("en-IN", { style: "currency", currency: "INR" });
}

function getTotal(list) {
    var total = 0;
    for (var i = 0; i < list.length; i++) {
        total = total + Number(list[i].amount);
    }
    return total;
}

function safeText(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}


function render() {
    renderIncomeList();
    renderExpenseList();
    renderSummary();
    renderBudget();
    renderCategories();
    renderReport();
    renderPieChart();
}

function renderIncomeList() {
    var list = document.getElementById("incomeList");
    list.innerHTML = "";

    for (var i = 0; i < allIncome.length; i++) {
        var item = allIncome[i];

        var li = document.createElement("li");
        li.className = "flex justify-between items-center py-2 gap-3";

        var descSpan = document.createElement("span");
        descSpan.className = "flex-1 truncate";
        descSpan.textContent = item.desc;

        var amountSpan = document.createElement("span");
        amountSpan.className = "font-medium text-emerald-600";
        amountSpan.textContent = money(item.amount);

        var delBtn = document.createElement("button");
        delBtn.className = "delete-btn text-slate-600 hover:text-red-600";
        delBtn.textContent = "✕";
        delBtn.setAttribute("data-type", "income");
        delBtn.setAttribute("data-idx", i);

        li.appendChild(descSpan);
        li.appendChild(amountSpan);
        li.appendChild(delBtn);
        list.appendChild(li);
    }

    if (allIncome.length === 0) {
        var empty = document.createElement("li");
        empty.className = "text-slate-600 py-2";
        empty.textContent = "No income added yet.";
        list.appendChild(empty);
    }
}

function renderExpenseList() {
    var list = document.getElementById("expenseList");
    list.innerHTML = "";

    for (var i = 0; i < allExpenses.length; i++) {
        var item = allExpenses[i];

        var li = document.createElement("li");
        li.className = "flex justify-between items-center py-2 gap-3";

        var catSpan = document.createElement("span");
        catSpan.className = "text-xs px-2 py-0.5 bg-slate-100 rounded-full whitespace-nowrap";
        catSpan.textContent = item.cat;

        var descSpan = document.createElement("span");
        descSpan.className = "flex-1 truncate";
        descSpan.textContent = item.desc;

        var amountSpan = document.createElement("span");
        amountSpan.className = "font-medium text-red-600";
        amountSpan.textContent = money(item.amount);

        var delBtn = document.createElement("button");
        delBtn.className = "delete-btn text-slate-600 hover:text-red-600";
        delBtn.textContent = "✕";
        delBtn.setAttribute("data-type", "expense");
        delBtn.setAttribute("data-idx", i);

        li.appendChild(catSpan);
        li.appendChild(descSpan);
        li.appendChild(amountSpan);
        li.appendChild(delBtn);
        list.appendChild(li);
    }

    if (allExpenses.length === 0) {
        var empty = document.createElement("li");
        empty.className = "text-slate-600 py-2";
        empty.textContent = "No expenses added yet.";
        list.appendChild(empty);
    }
}

function renderSummary() {
    var totalIncome = getTotal(allIncome);
    var totalExpense = getTotal(allExpenses);
    var remaining = totalIncome - totalExpense;

    document.getElementById("sumIncome").textContent = money(totalIncome);
    document.getElementById("sumExpense").textContent = money(totalExpense);

    var remEl = document.getElementById("sumRemaining");
    remEl.textContent = money(remaining);
    if (remaining < 0) {
        remEl.className = "text-xl font-bold text-red-600";
    } else {
        remEl.className = "text-xl font-bold text-emerald-600";
    }
}

function renderBudget() {
    var totalExpense = getTotal(allExpenses);
    var limit = Number(budgetLimit);
    var budgetLeftEl = document.getElementById("sumBudgetLeft");
    var statusEl = document.getElementById("budgetStatus");

    if (budgetLimit === "" || limit === 0) {
        budgetLeftEl.textContent = money(0);
        budgetLeftEl.className = "text-xl font-bold";
        statusEl.textContent = "No limit set.";
        return;
    }

    var left = limit - totalExpense;

    budgetLeftEl.textContent = money(left);
    if (left < 0) {
        budgetLeftEl.className = "text-xl font-bold text-red-600";
    } else {
        budgetLeftEl.className = "text-xl font-bold text-emerald-600";
    }

    if (left < 0) {
        statusEl.textContent = "Over budget by " + money(-left);
    } else {
        statusEl.textContent = "Under budget by " + money(left);
    }
}

function renderCategories() {
    var categories = {};
    for (var i = 0; i < allExpenses.length; i++) {
        var cat = allExpenses[i].cat;
        var amount = Number(allExpenses[i].amount);
        if (categories[cat] === undefined) {
            categories[cat] = 0;
        }
        categories[cat] = categories[cat] + amount;
    }

    var box = document.getElementById("categoryBreakdown");
    box.innerHTML = "";

    var catNames = Object.keys(categories);
    if (catNames.length === 0) {
        var empty = document.createElement("p");
        empty.className = "text-slate-600";
        empty.textContent = "No expense data.";
        box.appendChild(empty);
        return;
    }

    var totalExpense = getTotal(allExpenses);

    for (var c = 0; c < catNames.length; c++) {
        var name = catNames[c];
        var amount = categories[name];
        var percent = Math.round((amount / totalExpense) * 100);

        var row = document.createElement("div");

        var top = document.createElement("div");
        top.className = "flex justify-between mb-1";

        var nameSpan = document.createElement("span");
        nameSpan.className = "font-medium";
        nameSpan.textContent = name;

        var amountSpan = document.createElement("span");
        amountSpan.className = "text-slate-700";
        amountSpan.textContent = money(amount) + " (" + percent + "%)";

        top.appendChild(nameSpan);
        top.appendChild(amountSpan);

        var track = document.createElement("div");
        track.className = "h-2 bg-slate-200 rounded-full overflow-hidden mb-2";

        var fill = document.createElement("div");
        fill.className = "h-full bg-slate-600 rounded-full";
        fill.style.width = percent + "%";

        track.appendChild(fill);
        row.appendChild(top);
        row.appendChild(track);
        box.appendChild(row);
    }
}



function renderReport() {
    var body = document.getElementById("reportTableBody");
    body.innerHTML = "";

    for (var i = 0; i < allIncome.length; i++) {
        var incomeItem = allIncome[i];
        var incomeRow = document.createElement("tr");
        incomeRow.className = "border-b border-slate-100";
        incomeRow.innerHTML =
            "<td class='py-2 pr-4'><span class='text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full'>Income</span></td>" +
            "<td class='py-2 pr-4'>-</td>" +
            "<td class='py-2 pr-4'>" + safeText(incomeItem.desc) + "</td>" +
            "<td class='py-2 pr-4 text-right text-emerald-600'>" + money(incomeItem.amount) + "</td>";
        body.appendChild(incomeRow);
    }

    for (var j = 0; j < allExpenses.length; j++) {
        var expenseItem = allExpenses[j];
        var expenseRow = document.createElement("tr");
        expenseRow.className = "border-b border-slate-100";
        expenseRow.innerHTML =
            "<td class='py-2 pr-4'><span class='text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded-full'>Expense</span></td>" +
            "<td class='py-2 pr-4'>" + safeText(expenseItem.cat) + "</td>" +
            "<td class='py-2 pr-4'>" + safeText(expenseItem.desc) + "</td>" +
            "<td class='py-2 pr-4 text-right text-red-600'>" + money(expenseItem.amount) + "</td>";
        body.appendChild(expenseRow);
    }

    var totalIncome = getTotal(allIncome);
    var totalExpense = getTotal(allExpenses);
    var totalRow = document.createElement("tr");
    totalRow.innerHTML =
        "<td class='py-2 pr-4 font-semibold' colspan='3'>Total</td>" +
        "<td class='py-2 pr-4 text-right font-semibold'>" + money(totalIncome - totalExpense) + "</td>";
    body.appendChild(totalRow);
}



var pieColors = [
    "#f97316", 
    "#3b82f6", 
    "#22c55e", 
    "#eab308", 
    "#ef4444", 
    "#8b5cf6", 
    "#64748b", 
    "#ec4899", 
    "#14b8a6", 
    "#06b6d4"  
];

function getCategories() {
    var categories = {};
    for (var i = 0; i < allExpenses.length; i++) {
        var cat = allExpenses[i].cat;
        var amount = Number(allExpenses[i].amount);
        if (categories[cat] === undefined) {
            categories[cat] = 0;
        }
        categories[cat] = categories[cat] + amount;
    }
    return categories;
}

function renderPieChart() {
    var categories = getCategories();
    var catNames = Object.keys(categories);
    var pie = document.getElementById("pieChart");
    var legend = document.getElementById("pieLegend");
    legend.innerHTML = "";

    if (catNames.length === 0) {
        pie.style.background = "conic-gradient(#e2e8f0 0 100%)";
        var noData = document.createElement("p");
        noData.className = "text-slate-600";
        noData.textContent = "No expense data.";
        legend.appendChild(noData);
        return;
    }

    var totalExpense = getTotal(allExpenses);
    var gradient = "";
    var start = 0;

    for (var c = 0; c < catNames.length; c++) {
        var name = catNames[c];
        var amount = categories[name];
        var percent = (amount / totalExpense) * 100;
        var end = start + percent;
        var color = pieColors[c % pieColors.length];

        if (c > 0) {
            gradient = gradient + ", ";
        }
        gradient = gradient + color + " " + start + "% " + end + "%";

        var legendRow = document.createElement("div");
        legendRow.className = "flex items-center gap-2";
        legendRow.innerHTML =
            "<span class='inline-block w-3 h-3 rounded-full' style='background: " + color + "'></span>" +
            "<span class='font-medium'>" + safeText(name) + "</span>" +
            "<span class='text-slate-700'>" + money(amount) + " (" + Math.round(percent) + "%)</span>";
        legend.appendChild(legendRow);

        start = end;
    }

    pie.style.background = "conic-gradient(" + gradient + ")";
}



var incomeForm = document.getElementById("incomeForm");
incomeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var desc = document.getElementById("incomeDesc").value;
    var amount = parseFloat(document.getElementById("incomeAmt").value);

    if (desc === "" || isNaN(amount) || amount <= 0) {
        return;
    }

    var newItem = {
        desc: desc,
        amount: amount
    };
    allIncome.push(newItem);

    saveData();
    render();
    incomeForm.reset();
    document.getElementById("incomeDesc").focus();
});


var expenseForm = document.getElementById("expenseForm");
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var cat = document.getElementById("expenseCat").value;
    var desc = document.getElementById("expenseDesc").value;
    var amount = parseFloat(document.getElementById("expenseAmt").value);

    if (desc === "" || isNaN(amount) || amount <= 0) {
        return;
    }

    var newItem = {
        cat: cat,
        desc: desc,
        amount: amount
    };
    allExpenses.push(newItem);

    saveData();
    render();
    expenseForm.reset();
    document.getElementById("expenseDesc").focus();
});


document.addEventListener("click", function (event) {
    var btn = event.target.closest(".delete-btn");
    if (btn === null) {
        return;
    }

    var type = btn.getAttribute("data-type");
    var index = Number(btn.getAttribute("data-idx"));

    if (type === "income") {
        allIncome.splice(index, 1);
    }
    if (type === "expense") {
        allExpenses.splice(index, 1);
    }

    saveData();
    render();
});


var saveBudgetBtn = document.getElementById("saveBudget");
saveBudgetBtn.addEventListener("click", function () {
    var input = document.getElementById("budgetLimit").value;

    if (input === "") {
        budgetLimit = "";
    } else {
        budgetLimit = parseFloat(input);
        if (budgetLimit < 0) {
            budgetLimit = 0;
        }
    }

    saveData();
    render();
});


if (currentUser === null) {
    showAuthScreen();
} else {
    startApp();
}
