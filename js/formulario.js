import { Tipo_Musica } from "./varios.js";

window.addEventListener('load', inicio);

function inicio() {

    //Cargar el option del formulario
    let tipoMusica = document.getElementById("tipo");
    console.log("hola");
    tipoMusica.options[1].value = Tipo_Musica["ROCK"];
    tipoMusica.options[2].value = Tipo_Musica["POP"];
    tipoMusica.options[3].value = Tipo_Musica["PUNK"];
    tipoMusica.options[4].value = Tipo_Musica["INDIE"];

    tipoMusica.options[1].innerHTML = Object.keys(Tipo_Musica)[0];
    tipoMusica.options[2].innerHTML = Object.keys(Tipo_Musica)[1];
    tipoMusica.options[3].innerHTML = Object.keys(Tipo_Musica)[2];
    tipoMusica.options[4].innerHTML = Object.keys(Tipo_Musica)[3];


    let tienda = new Tienda();

    console.log(document.getElementById('fecha'));

    let btnGuardar = d.getElementById('guardar');
    let btnEliminar = d.getElementById('eliminar');
    let btnVer = d.getElementById('ver');
    let btnModificar = d.getElementById('modificar');

    console.log(window.document.getElementById('guardar'));

    btnGuardar.addEventListener('click', function() {
        alert('has pulsado guardar');
        //Validar los campos
        //Todos los campos son obligatorios
        //Texto vacio cuando no se ha introducido texto o únicamente espacios
        //Mostrar información en el div adecuado
        //fecha formato DD/MM/AAAA
        //esatanteria entre 1 y 10
        //Comprobar que no se a repetido
        //Mensaje final de correcto insertaado
    }, false);


    console.log(tienda);

}