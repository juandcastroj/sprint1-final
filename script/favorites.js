
const showFav = document.querySelector('.grid-mascotas');

const getLocalStorage = () => {

  const det3 = JSON.parse(localStorage.getItem("Fav"));
  console.log(det3);
  det3.forEach(element => {
    const { likeName, likeImg, likeRace, likeId, likeCategory } = element;

      showFav.innerHTML += `
      <div class="card bg-transparent text-white"  id='${likeId}' >
      <img src=${likeImg} id='${likeId}' class="card-img" alt="...">
  <div class="card-img-overlay ${likeCategory} id=${likeId}">
      <h5 class="card-title">${likeName}</h5>
      <p class="card-text">${likeRace}</p>
  </div>
  </div>
      `

  });
}

document.addEventListener('DOMContentLoaded', getLocalStorage);