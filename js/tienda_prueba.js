let Tienda = require('./Tienda');

let tienda = new Tienda();

tienda.addDisco({ titulo: 'titulo1', cantante: 'cantante1', tipo: 'tipo1', fecha: 1, estanteria: 10, prestado: false });
tienda.addDisco({ titulo: 'titulo2', cantante: 'cantante2', tipo: 'tipo2', fecha: 2, estanteria: 11, prestado: true });
tienda.addDisco({ titulo: 'titulo3', cantante: 'cantante3', tipo: 'tipo3', fecha: 3, estanteria: 12, prestado: false });

console.log("***************Discos*******************");
console.log(tienda.getDiscos());
console.log("***************Disco en la segunda posición*******************");
console.log(tienda.getDisco(1));
tienda.deleteDisco('titulo2');
console.log("*************** Borrar Disco con titulo2*******************");
console.log(tienda.getDiscos());