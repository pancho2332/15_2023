let propietario, modelo, placa, tipo, fecha, hora, cantidad
let formulario = document.getElementById("form2")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    leerdatos()
})

function leerdatos() {

    propietario = document.getElementById("propietario").value
    modelo = document.getElementById("modelodelvehiculo").value
    placa = document.getElementById("placa").value
    tipo = document.getElementById("carromoto").value
    fecha = document.getElementById("dd/mm/aaaa").value
    hora = document.getAnimations("hh:mm")
    cantidad = document.getElementById("cantidad").value

    validardatos(propietario ,modelo, placa, tipo, fecha, hora, cantidad)
    guardarlocalstorage(propietario ,modelo, placa, tipo, fecha, hora, cantidad)
}
function  validardatos(propietario, modelo, placa, tipo, fecha, hora, cantidad) {
    if(propietario.length==0 || modelo.length==0 || placa.length==0 || tipo.length==0 || fecha.length==0 || hora.length==0 || cantidad.length==0){

        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          }) 
    }
}
function guardarlocalstorage(propietario, modelo, placa, tipo, fecha, hora, cantidad) {

    localStorage.setItem("propietario", propietario)
    localStorage.setItem("modelo", modelo)
    localStorage.setItem("placa", placa)
    localStorage.setItem("tipo", tipo)
    localStorage.setItem("fecha", fecha)
    localStorage.setItem("hora",hora)
    localStorage.setItem("cantidad", cantidad)
    listardatos()
}
function listardatos() {
    
    let propietariousu = localStorage.getItem("propietario")
    let modelousu = localStorage.getItem("modelo")
    let placausu = localStorage.getItem("placa")
    let tipousu = localStorage.getItem("carromoto")
    let fechausu = localStorage.getItem("fecha")
    let horausu = localStorage.getItem("hora")
    let cantidadusu = localStorage.getItem("cantidad")
}  

