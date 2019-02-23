import { Tipo_Musica } from "./varios.js";

window.addEventListener('load', inicio);

function inicio() {

    //Cargar el option del formulario
    let tipoMusica = document.getElementById("tipo");

    for (let i = 0; i < tipoMusica.options.length; i++) {
        tipoMusica.options[i + 1].value = Object.values(Tipo_Musica)[i];
        tipoMusica.options[i + 1].innerHTML = Object.keys(Tipo_Musica)[i];
    }

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