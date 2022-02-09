const list = document.querySelector('body')


const getLocalStorage2 = () => {

    const det = JSON.parse(localStorage.getItem("Cats"));
    const { imagen, nombre, raza, edad, personalidad, usuario, categoria, id, ubicacion, historia, imgusuario } = det

    list.innerHTML += `
     <a href="../main.html"><button class="btnBack"><img src="../images/back.png" alt="logo atrás"></button></a>
  <div class="card-body" >
          <img src=${imagen} class="card-img-top" alt="...">
          <button style="float: right"  class="favCat" > <img src="../images/Guardar.png" alt="" style="float: right" ></button>
      <div>            
            <strong> <h2 class="card-title">${nombre}</h2></strong>
      </div>
      <div>
          <img class="imgraza"  src="./image/raza.png" alt="" style="float: left;">
              <p style="color: #535353;">   ${raza} </p>
          <img class="agg" src="./image/edad.png" alt="" style="float: left;" >
              <p style="color: #535353;" >   ${edad}</p>
          <img src="./image/Component 1 (1).png" alt="" style="float: left;">
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
            <a href="../chat.html"><img   src="../images/Primary1.png"  alt="boton" width="250px" style="float: right" ></a>
        </div>
      </div>
    </div>`




    //agregar a favoritos

    const btnLike = document.querySelector('.favCat');

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

        if (btnLike.classList.contains('favCat')) {


            btnLike.classList.remove("favCat");
            btnLike.classList.add("circlePush");

            if (key !== null) {
                key.push(like)
                localStorage.setItem('Fav', JSON.stringify(key))
            } else {
                arrayLike.push(like);
                localStorage.setItem('Fav', JSON.stringify(arrayLike))
            }

        } else if (btnLike.classList.contains('favCat')) {
            btnLike.classList.remove("circlePush");
            btnLike.classList.add("circleLike");
            const cat = key.filter(categ => categ.likeCategory === 'cat')
            //const dog = key.filter(categ => categ.likeCategory === 'dog')



        }
    }
    )
}

document.addEventListener('DOMContentLoaded', getLocalStorage2)



list.addEventListener('click', (e) => {

    if (e.target.classList.contains('card-img-top')) {
        window.location.href = "../main.html";
    }

})

