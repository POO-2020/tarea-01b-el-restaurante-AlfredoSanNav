import Pedido from "./pedido.js"
import Producto from "./producto.js"
import Direccion from "./direccion.js"

export default class Restaurante{
    /**
     * 
     * @param {*} nombre 
     * @param {*} telefono 
     * @param {Direccion} dirección 
     */
    constructor(nombre, telefono, dirección){
        this.nombre = nombre
        this.telefono = telefono
        this.dirección = dirección
        this.productos = new Array ()
        this.pedidos = new Array ()

    }
    registrarProductos(producto){
        this.productos.push(producto)

    }
    listarProductos(){
        this.productos.forEach((producto, i) => {
            console.log(`${producto.getDescripcion()}`)
            
        });
    }
    registrarPedidos(pedido){
        this.pedidos.push(pedido)

    }
    listarPedido(){
        this.pedidos.forEach((pedido, i) => {
            console.log(`${pedido.getDescripcion()}`)       
        });
    }
}