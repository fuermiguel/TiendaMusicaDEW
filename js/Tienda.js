class Tienda {
    constructor() {
        this._discos = new Array();
    }

    getNumeroDiscos() {
        return this._discos.length;
    }

    addDisco({ titulo, cantante, tipo, fecha, estanteria, prestado }) {

        //Sino continuo añadiendo el disco  a la tienda y devolviendo un true
        this._discos.push({ titulo, cantante, tipo, fecha, estanteria, prestado });
        return true;
    }

    getDiscos() {
        return this._discos;
    }

    getNumeroDiscosDisponible() {
        return this._discos.reduce(function(valorAnterior, ValorActual, indice, vector) {

            if (!vector[indice].prestado) return valorAnterior + 1;
            return valorAnterior;
        }, 0)
    }

    getTituloDisco(pos) {
        return this._discos[pos].titulo;
    }

    getDisco(pos) {
        return this._discos[pos];
    }

    existeDisco(disco) {
        if (this._discos.some(elemen => JSON.stringify(elemen) === JSON.stringify(disco))) return true;
        return false;
    }

    deleteDisco(titulo) {
        for (let indice in this._discos) {
            if (this._discos[indice].titulo === titulo) {
                this._discos.splice(indice, 1);
                return true;
            }
        }
        return false;
    }

    modificaDisco(modificar) {

        for (let indice in this._discos) {
            if (this._discos[indice].titulo === modificar.titulo) {
                //Fusión de objetos con las mismas propiedades
                this._discos[indice] = Object.assign({}, this._discos[indice], modificar);

                return true;
            }
        }
        return false;

    };
};

export { Tienda };





// let tienda = new Tienda();

// tienda.addDisco({ titulo: 'titulo1', cantante: 'cantante1', tipo: 'tipo1', fecha: 1, estanteria: 10, prestado: false });
// tienda.addDisco({ titulo: 'titulo2', cantante: 'cantante2', tipo: 'tipo2', fecha: 2, estanteria: 11, prestado: true });
// tienda.addDisco({ titulo: 'titulo3', cantante: 'cantante3', tipo: 'tipo3', fecha: 3, estanteria: 12, prestado: false });

// tienda.modificaDisco({ titulo: 'titulo1', cantante: 'Nuevocantante100', tipo: 'Nuevotipo1', fecha: 10 });
// console.log(tienda);