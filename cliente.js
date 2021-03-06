import Direccion from "./direccion.js"
export default class Cliente{
    /**
     * 
     * @param {string} nombre Nombre completo del cliente
     * @param {Direccion} direccion La dirección del cliente
     * @param {number} telefono Número de celular del cliente
     */
    constructor(nombre, direccion, telefono){
        this.direccion = direccion
        this.nombre = nombre
        this.telefono = telefono
    }
    getPerfil(){
        let perfil = `${this.nombre}, ${this.telefono} ${direccion}`
        return(perfil)
    }
}
