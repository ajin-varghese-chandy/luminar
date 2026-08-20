document.getElementById('usrname').innerText = window.localStorage.getItem('username')

function logout() {
    localStorage.clear();
    window.location = './login.html'
}

function addEmp() {
    const empData = {
        id: empid.value,
        name: empname.value,
        addr: empaddr.value,
        desg: empdesg.value,
        exp: empexp.value,
        sal: empsalary.value,
    };

    if (empData.id in localStorage) {
        alert("employee already exit");
    } else {
        localStorage.setItem(empData.id, JSON.stringify(empData))
        alert('employee deatiles added')
        empid.value = ""
        empname.value = ""
        empaddr.value = ""
        empdesg.value = ""
        empexp.value = ""
        empsalary.value = ""
    }
}

function search() {
    const id = emp.value;
    const employee = JSON.parse(localStorage.getItem(id))
    console.log(employee);

    empTable.innerHTML = `


            
<tr>
  <td class="border px-4 py-3">${employee.id}</td>
  <td class="border px-4 py-3">${employee.name}</td>
  <td class="border px-4 py-3">${employee.addr}</td>
  <td class="border px-4 py-3">${employee.desg}</td>
  <td class="border px-4 py-3">${employee.exp}</td>
  <td class="border px-4 py-3">${employee.sal}</td>
</tr>
</div>
`;


}