import { Tipo_Musica } from "./varios.js";
import { Tienda } from "./tienda.js";

window.addEventListener('load', inicio);

function inicio() {

    //Cargar el option del formulario
    let tipoMusica = document.getElementById("tipo");

    for (let i = 1; i < tipoMusica.options.length; i++) {
        tipoMusica.options[i].value = Object.values(Tipo_Musica)[i - 1];
        tipoMusica.options[i].innerHTML = Object.keys(Tipo_Musica)[i - 1];
    }

    //Cargo la tienda
    let tienda = new Tienda();

    let btnGuardar = document.getElementById('guardar');
    let btnEliminar = document.getElementById('eliminar');
    let btnVer = document.getElementById('ver');
    let btnModificar = document.getElementById('modificar');

    mostrarListado(); //Mostramos el listado de discos disponibles


    btnGuardar.addEventListener('click', validar, false);

    function validarTitulo() {
        let elemento = document.getElementById("titulo");

        if (!elemento.checkValidity()) {

            error(elemento);
            return false;
        }

        return true;

    }

    function validarCantante() {
        let elemento = document.getElementById("cantante");

        if (!elemento.checkValidity()) {
            error(elemento);
            return false;
        }
        return true;
    }

    function validarFecha() {
        let elemento = document.getElementById("fecha");

        if (!elemento.checkValidity()) {
            error(elemento);
            return false;
        }
        return true;
    }

    function validarEstanteria() {
        let elemento = document.getElementById("estanteria");

        if (!elemento.checkValidity()) {
            error(elemento);
            return false;
        }
        return true;
    }

    function repetido(titulo) {
        let discos = tienda.getDiscos();
        if (discos.length > 0) {
            for (let i = 0; i < discos.length; i++) {
                if (discos[i].titulo === titulo) {
                    mostrarInformacion('Disco repetido');
                    return true;
                }
            }
        }
        return false;
    }

    function validar(e) {

        if (validarTitulo() && validarCantante() &&
            validarFecha() && validarEstanteria() &&
            !repetido(document.getElementById("titulo").value) &&
            confirm("Estás seguro de que quieres guardar")) {


            //Comprobamos el campo prestado
            let prestado = false;

            if (document.getElementById("prestado_si").checked) prestado = true;

            //Añadimos el disco
            tienda.addDisco({
                titulo: document.getElementById("titulo").value,
                cantante: document.getElementById("cantante").value,
                tipo: document.getElementById("tipo").value,
                fecha: document.getElementById("fecha").value,
                estanteria: document.getElementById("estanteria").value,
                prestado: prestado
            });

            //Mostramos información
            mostrarInformacion(`El Disco ${ document.getElementById("titulo").value} se ha insetado correctamente`);
            e.preventDefault(); //Evita que el formulario se envie.
            mostrarListado(); //Mostramos el listado

        } else {
            e.preventDefault(); //Evita que el formulario se envie.
        }
    }

    function error(elemento) {
        document.getElementById("informacion").style.display = "block"
        document.getElementById("informacion").innerHTML = elemento.validationMessage;

        elemento.focus();
    }

    /**
     * Borramos todos lo errores de los inputs
     */
    function borrarInformacion() {
        //  document.getElementById("informacion").innerHTML = "";
        //  document.getElementById("informacion").style.display = "none";
    }

    function mostrarInformacion(mensaje) {
        document.getElementById("informacion").style.display = "block"
        document.getElementById("informacion").innerHTML = mensaje;

    }

    function mostrarListado() {
        let cadena = ""; //Inicializamos la cadena del listado
        let discos = tienda.getDiscos(); //Obtenemos los discos
        let disponibles = 0; //Para saber los que no están alquilados

        //Comprobamos si hay discos
        if (discos.length > 0) {
            //Mostraremos lo que no estén prestados
            for (const disco of discos) {
                if (!disco.prestado) {
                    cadena = cadena + `<li>${disco.titulo}</li>`;
                    disponibles++;
                }
            }
            cadena = `<h4>Hay ${disponibles} Disco disponibles</h4><ul>` + cadena + '</ul>';
            console.log(disponibles);
            if (disponibles = 0) cadena = 'No hay discos disponibles';
        } else {
            cadena = "Todavía no tienes ningún disco";
        }
        console.log(discos);
        document.getElementById("listado").innerHTML = cadena;
    }

}