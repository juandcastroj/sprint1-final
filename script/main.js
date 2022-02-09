import getCats from "./getCats.js";
import getDogs from "./getDogs.js";
import showPets from "./showPets.js";

let btnGato = document.getElementById('btnGato');
let btnPerro = document.getElementById('btnperro');

const elemento = document.querySelector('.grid-mascotas')

const url = "http://localhost:4000/gatos"
const url2 = 'http://localhost:4004/perros'


//MOSTRAR TARJETAS

btnGato.addEventListener('click', () => {
    getCats(url)
    showPets('http://localhost:4000/gatos')
})


btnPerro.addEventListener('click', () => {
    getDogs(url2)
    showPets('http://localhost:4004/perros');
})



//DETALLE

elemento.addEventListener('click', async(e) => {

    const cardDet = e.target.classList.contains('card-img-overlay')
    const id = e.target.id

    if(cardDet){
         const lista = await getCats(url);
         const lista2 = await getDogs(url2)

         const objeto = lista.find(list => list.id === Number(id))
         const objeto2 = lista2.find(list => list.id === Number(id))

         localStorage.setItem("Cats",JSON.stringify(objeto));
         localStorage.setItem("Dogs",JSON.stringify(objeto2));

         window.location.href = "detail.html"
    }
})






















