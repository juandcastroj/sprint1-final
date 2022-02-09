let formulario = document.getElementById('formulario');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');


formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;

    let showData = document.getElementById('insert')
    showData.innerHTML+=`  <strong> nombre: ${name} <br> apellido: ${lastName} <br> correo: ${email} </strong> `
  
    let resp = await fetch('http://localhost:3002/perfiles',{
        method: 'POST',
        body: JSON.stringify({
        nombre: name,
        apellido: lastName,
        correo: email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }

        // console.log(resp)
    }) 

})








