document.getElementById("status").style.display = "none";

let loadData = async () => {
  let response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  let data = await response.json();
  showCategories(data.categories);
};
loadData();
const showCategories = (categories) => {
  categories.forEach((element) => {
    console.log(element);
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

const loadPets = async (categoryName) => {
  let response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${categoryName}`
  );
  let data = await response.json();
  displayPets(data.data);
};

const displayPets = (pets) => {
  // console.log(pets);
  if (pets.length < 1) {
    document.getElementById("petsContainer").style.display = "none";
    document.getElementById("status").style.display = "block";
  } else {
    document.getElementById("petsContainer").style.display = "block";
  }
  pets.forEach((pet) => {
    const petsContainer = document.getElementById("petsContainer");
    petsContainer.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("mt-5");
    div.innerHTML = `
    <div class="card bg-base-100 w-96 mx-auto">
  <figure>
    <img
      src=${pet.image} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${pet.breed}</h2>
    <p>${pet.pet_details}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `;
    petsContainer.appendChild(div);
  });
};
loadPets("category");
