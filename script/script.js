let Nombre, correo, mensaje;
let formulario = document.getElementById("form")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    leerdatos()
})

function leerdatos() {
    Nombre = document.getElementById("Nombre").value
    correo = document.getElementById("correo").value
    mensaje = document.getElementById("textarea").value
    validardatos(Nombre, correo, mensaje)
    guardarlocalstorage(Nombre, correo, mensaje)
}
function validardatos(Nombre, correo, mensaje){
    if(Nombre.length==0 || correo.length==0 || mensaje.length==0){

        swal.fire({
            title: "error",
            Text: "do you want to continue",
            icon: "error" ,
            confirmbuttontext: "cool",
            iconcolor:"purple"
        })
    }
}
function guardarlocalstorage(Nombre, correo, mensaje){
    localStorage.setItem("Nombre",Nombre)
    localStorage.setItem("correo",correo)
    localStorage.setItem("mensaje",mensaje)
    listardatos()
}
function listardatos( ) {
    let Nombreusu = localStorage.getItem("Nombre")
    let correousu = localStorage.getItem("correo")
    let mensajeusu = localStorage.getItem("correo")
}
