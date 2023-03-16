// axios
//   .get(
//     "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=t4cNRWb3SwlKz2wftaOxNwGGrYXWKmtG8RACQg9j"
//   )
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");
let table = document.getElementById("table");
let container = document.getElementById("container");

// let random = document.getElementById("random");

const changePokemon = async () => {
  let randomNumber = Math.ceil(Math.random() * 854) + 1; // 1 et 855

  let requestString = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=t4cNRWb3SwlKz2wftaOxNwGGrYXWKmtG8RACQg9j`;

  let data = await fetch(requestString);
  console.log(data);

  let response = await data.json();
  console.log(response);

  for (let i = 0; i <= response.photos.length; i++) {
    table.innerHTML += `
    <div id="wrapper">
        <div id="image-wrapper">
            <img id="image" src="" alt="">
        </div>
        <div id="header">
            <div id="number">
<a href="${response.photos[i].img_src}">${response.photos[i].id}</a>
            </div>
    </div>
    `;
  }
};

// response.photos[i].img_src;
//     console.log(response.photos[i].img_src);

//   image.src = response.photos[1].img_src;
//   pokeNumber.textContent = `#${response.photos[1].id}`;
//   pokeName.textContent = response.photos[1].earth_date;

//   random = randomNumber;
//   console.log(random);

changePokemon();
// button.addEventListener("click", changePokemon);
