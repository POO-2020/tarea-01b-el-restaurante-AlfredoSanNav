import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Cliente from "./cliente"
import ElementosPedidos from "./elemento-pedido.js"
class Pedido{
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Cliente} cliente 
     * @param {ElementosPedidos} elementosPedidos 
     */
    constructor(fecha, hora, cliente, elementosPedidos){
        this.fecha = fecha
        this.hora = hora
        this.cliente = cliente
        this.elementosPedidos = elementosPedidos

    }
    getResumen(){

    }

    getNumeroElementos(){

    }

    getProductos(){

    }
    getCostoTotal(){

    }

    agregarElemento(){

    }

    listarElemento(){

    }
}