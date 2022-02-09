const showPets = async (url) =>{

    let muestraMascota = document.querySelector(".grid-mascotas")
    muestraMascota.innerHTML = '';
   
    const resp = await fetch(url);
    const data = await resp.json();

    data.forEach(mascota => {
    const {imagen,nombre,raza,id} = mascota;
    muestraMascota.innerHTML += `
        <div class="col mascotas">
        <a href="#" class="enlace-detalle-mascota">
        <div class="card bg-dark text-white gradiente">                
        <img src="${imagen}" class="card-img" alt="...">
        <div class="card-img-overlay"  id=${id}>
        <h5 class="card-title body2Bold">${nombre}</h5>
        <p class="card-text body2Regular">${raza}</p>
        </div>
        </div>
        </a>
        </div>
        `
    });
}

export default showPets