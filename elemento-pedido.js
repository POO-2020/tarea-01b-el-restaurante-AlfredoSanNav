import Producto from "./producto.js"

class ElementoPedido{
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
        let descripcion = `${this.cantidad}x ${this.nombre} $ ${this.precio}`
        return(descripcion)
    }
}