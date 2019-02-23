//Mejor gestión del espacio de nombres (Evitar la contaminación del espacio de nombres
//https://code.i-harness.com/es/q/90a0c
//https://www.youtube.com/watch?v=k_UTfaGCDnU
(function(d) {
    let tienda = new Tienda();

    //Esto es para asegurarnos que el documento se ha cargado.
    window.onload = init;

    function init() {
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


})(document);