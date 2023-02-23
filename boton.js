document.querySelector('#btnIngresar').addEventListener( 'click',
iniciarSesion);

function iniciarSesion(){
    var nombre='';
    var password='';
    var bAcceso='';

    nombre=document.querySelector('nombre') .value;
    password=document.querySelector('password') .value;

    bAcceso = validarCredenciales(nombre, password);
    console.log(bAcceso);
}