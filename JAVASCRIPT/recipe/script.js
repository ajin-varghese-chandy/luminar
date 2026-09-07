let recipes;

function getRecipes(){
    const res = fetch('https://dummyjson.com/recipes')
    res.then((data)=>{
        data.json().then((rep)=>{
           
           recipes =  rep.recipes;
           displayRecipes()
           displayHighestRatingRecipe()
        })
        
        
        
    })
}

function displayRecipes(){

 console.log(recipes);


 recipes.forEach((el)=>{
    if(el.rating > 4.5){
        document.getElementById('recipleList').innerHTML +=  `
      <div
    class="overflow-hidden rounded-2xl bg-white border"
  >
    <img
      src="${el.image}"
      alt="${el.name}"
      width="300"
      height="300"
      class="h-64 w-full object-cover"
    />

    <div class="p-5">
      <h1 class="mb-2 text-xl font-bold text-gray-900">
        ${el.name}
      </h1>
      <div class="space-between">
     <h3 class="text-sm font-medium uppercase tracking-wide text-yellow-600">
  ⭐ ${el.rating}
</h3>
      <h3 class="text-sm font-medium uppercase tracking-wide text-orange-600">
        ${el.cuisine}
      </h3>
      </div>
    </div>
  </div>
        `;
    }
    
 })

    
}
function displayHighestRatingRecipe() {
  const hr = recipes.reduce((highest, current) =>
    current.rating > highest.rating ? current : highest
  );
  console.log(hr);

  document.getElementById("highestRated").innerHTML += `
  
   <div class="mx-auto mt-5 max-w-sm overflow-hidden rounded-2xl bg-white border ">
      <h1 class="text-center bg-yellow-500 " >TOP RECIPE</h1>
      <img
        src="${hr.image}"
        alt="${hr.name}"
        class="h-72 w-full object-cover"
      />

      <div class="p-5">
        <h1 class="mb-2 text-2xl font-bold text-gray-900">
          ${hr.name}
        </h1>

        <h3 class="mb-2 text-sm font-medium uppercase tracking-wide text-orange-600">
          ${hr.cuisine}
        </h3>

        <h3 class="text-sm font-medium uppercase tracking-wide text-yellow-600">
          ⭐ ${hr.rating}
        </h3>
      </div>

    </div>
  `
  
}

function searchRecipe() {
  const searchValue = document.querySelector("input").value.toLowerCase();
  document.getElementById('result').innerHTML = ''
let result;
  recipes.filter(function (recipe) {

    if(recipe.name.toLowerCase().includes(searchValue)){
 console.log(recipe);
  document.getElementById('result').innerHTML += `
   <div
    class="overflow-hidden m-3 rounded-2xl bg-white border"
  >
    <img
      src="${recipe.image}"
      alt="${recipe.name}"
      width="300"
      height="300"
      class="h-64 w-full object-cover"
    />

    <div class="p-5">
      <h1 class="mb-2 text-xl font-bold text-gray-900">
        ${recipe.name}
      </h1>
      <div class="space-between">
     <h3 class="text-sm font-medium uppercase tracking-wide text-yellow-600">
  ⭐ ${recipe.rating}
</h3>
      <h3 class="text-sm font-medium uppercase tracking-wide text-orange-600">
        ${recipe.cuisine}
      </h3>
      </div>
    </div>
  </div>
  
  `
    }

  });

  
}

function ClearSearchRecipe() {
    document.getElementById('result').innerHTML = ''
    document.getElementById('recipleSearchInput').value = ''
}

getRecipes()