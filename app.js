let loadData = async () => {
  let response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  let data = await response.json();
  showCategories(data.categories);
};
const showCategories = (categories) => {
  categories.forEach((element) => {
    const categoriesContainer = document.getElementById(
      "categorires-container"
    );
    const div = document.createElement("div");
    div.classList.add("flex");
    div.innerHTML = `
        <button onclick="loadPets('${element.category}')" class="btn">${element.category}
        <img class="w-8" src="${element.category_icon}" alt=""/>
        </button>
    
        `;
    categoriesContainer.appendChild(div);
  });
};

const loadPets = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`);
    const data = await response.json();
    console.log(data.data);
};

const displayPets=(pets)=>{
    console.log(pets);
}

loadPets("cat");

loadData();
