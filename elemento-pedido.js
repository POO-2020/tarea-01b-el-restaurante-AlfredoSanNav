import Producto from "./producto.js"

export default class ElementoPedido{
    /**
     * 
     * @param {Producto} producto Producto que se va a comprar
     * @param {number} cantidad Cantidad del producto que se va a comprar
     */
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad

    }
    getDescripcion(){
        return(`${this.cantidad}x ${this.producto.getDescripcion()}`)
    }
}