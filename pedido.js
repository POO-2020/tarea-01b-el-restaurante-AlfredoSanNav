import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Cliente from "./cliente.js"
import ElementoPedido from "./elemento-pedido.js"


export default class Pedido{
    /**
     * 
     * @param {Fecha} fecha La fecha del día.
     * @param {Tiempo} hora Hora del día.
     * @param {Cliente} cliente Cliente al que se le está vendiendo.
     */
    constructor(fecha, hora, cliente){
        this.fecha = fecha
        this.hora = hora
        this.cliente = cliente
        this.elementosPedidos = new Array ()
        this.elementosTotales = 0
        this.productosTotales = 0
        this.total = 0

        this.elementosPedidos.forEach((elemento, i)=>{
        
            this.elementosPedidos.forEach((elementos, i) =>{
                this.elementosTotales = this.elementosTotales + (elementos.cantidad)

            })

            this.elementosPedidos.forEach((producto,i) => {
                this.productosTotales =this.productosTotales + 1
            });
            
            this.elementosPedidos.forEach((precio , i)=>{
                this.total = this.total + (elemento.cantidad * elemento.precio)
            })

        })

    }
    getResumen(){
        
        return(`${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.elementosTotales} elementos con ${this.productosTotales} productos. `)
    }

    getNumeroElementos(){
        
        return(this.elementosTotales)

    }

    getProductos(){
        
        return(this.productosTotales)

    }
    getCostoTotal(){
        return(this.total)

    }

    agregarElemento(elemento){
        this.elementosPedidos.push(elemento)
    }

    listarElemento(){
        this.elementosPedidos.forEach((elemento, i) =>{
            console.log(elemento.getDescripcion())
        })

    }
}
/*
let pedido1 = new Pedido(new Fecha(new Date ("2010-02-25")), new Tiempo(7,57,"AM"), new Cliente("Alfredo Sánchez Nava", "República de Paraguay 2159", 3121947286))
pedido1.agregarElemento()
    let e1 = new ElementoPedido(new Producto("Pizza de peperoni", 75))
    pedido1.agregarElemento(e1)

pedido1.listarElemento()
console.log(pedido1.getResumen())
console.log(pedido1.getNumeroElementos())
console.log(pedido1.getProductos()) */