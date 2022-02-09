const list2 = document.querySelector('body')


const getLocalStorage1 = () => {

  const arrayLike = [];
  const det1 = JSON.parse(localStorage.getItem("Dogs"));
  const { imagen, nombre, raza, edad, personalidad, usuario, categoria, id, ubicacion, historia, imgusuario } = det1

  list2.innerHTML +=

  `<a href="../main.html"><button class="btnBack"><img src="../images/back.png" alt="logo atrás"></button></a>
  <div class="card-body" >
          <img src=${imagen} class="card-img-top" alt="...">
          <button style="float: right"  class="favDog" ><img src="../images/Guardar.png" alt="logofav" style="float: right"  ></button>
      <div>            
          <strong> <h2 class="card-title">${nombre}</h2></strong>
          
      </div>
      <div>
            <img class="imgraza"  src="../images/" alt="" style="float: left;">
              <p style="color: #535353;">   ${raza} </p>
            <img class="agg" src="../images/edad.png" alt="" style="float: left;" >
            <p style="color: #535353;" >   ${edad}</p>
            <img src="../images/unicacion.png" alt="" style="float: left;">
            <p style="color: #535353;"> ${ubicacion}</p>
            <h2 >   ${personalidad}</h2> 
        <div class="card">
        </div>
          <h2>Historia</h2>
            <p style="color: #535353;">Historia ${historia}</p>
        <div>
          <a href="#"><img src=${imgusuario} class="card-logo" alt="..."  style="float: left;"></a>
          <strong> <p style="color: #535353;">Publicado Por</p></strong>
          <p style="color: #535353;">  ${usuario}</p>
          <a href="../chat.html"><img   src="../images/Primary1.png"  alt="boton" width="250px" style="float: right"  ></a>
        </div>
      </div>
  </div>`





  //agregar a favoritos

  const btnLike = document.querySelector('.favDog');

  btnLike.addEventListener('click', () => {
    let likeName = nombre;
    let likeImg = imagen;
    let likeRace = raza;
    let likeId = id;
    let likeCategory = categoria;

    let like = {
      likeName,
      likeImg,
      likeRace,
      likeId,
      likeCategory
    }

    console.log(like)

    const key = JSON.parse(localStorage.getItem('Fav'))

    if (btnLike.classList.contains('favDog')) {
      //   console.log('like')
      btnLike.classList.remove("favDog");
      btnLike.classList.add("circlePush");

      if (key !== null) {
        key.push(like)
        localStorage.setItem('Fav', JSON.stringify(key))
      } else {
        arrayLike.push(like);
        localStorage.setItem('Fav', JSON.stringify(arrayLike))
      }

    } else if (btnLike.classList.contains('favDog')) {
      btnLike.classList.remove("circlePush");
      btnLike.classList.add("circleLike");
      //const cat = key.filter(categ => categ.likeCategory === 'cat')
      const dog = key.filter(categ => categ.likeCategory === 'dog')

    }
  }
  )
}

document.addEventListener('DOMContentLoaded', getLocalStorage1)

list2.addEventListener('click', (e) => {

  if (e.target.classList.contains('card-img-top')) {
    window.location.href = "../main.html";
  }

})


