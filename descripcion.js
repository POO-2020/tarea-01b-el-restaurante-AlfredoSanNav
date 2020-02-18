import Precio from "./precio";

class Producto{
    /**
     * 
     * @param {string} nombre Nombre del producto
     * @param {Precio} precio Costo del producto
     */
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
        
    }

    getDescripcion(){
        let descripcion = `${this.nombre} $ ${this.precio}`
        return(descripcion)
    }

}