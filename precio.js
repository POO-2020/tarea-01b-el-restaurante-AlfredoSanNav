export default class Precio{
    /**
     * 
     * @param {number} costo El costo del producto
     */
    constructor(costo){
        this.costo = costo
    }

    getPrecio(){
        console.log(`El precio del producto es ${this.costo}`)
    }
}

let precio1 = new Precio(25)
precio1.getPrecio()