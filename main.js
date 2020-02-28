import Restaurante from "./resturante.js"
import Producto from "./producto.js"
import Precio from "./precio.js"
import ElementoPedido from "./elemento-pedido.js"
import Pedido from "./pedido.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Cliente from "./cliente.js"
import Direccion from "./direccion.js"

class Main{
    constructor(){
        this.restaurante = new Restaurante(new Direccion("El pequeño Cesar", 3121455958,"Avenida siempre viva", 2159, 0, "Andares del Jazmín", 2804, "Colima", "Colima"))
    }
    registrarPedidos(){        
        this.restaurante.registrarPedidos(pedido);
        this.restaurante.listarPedidos();
    }
    registrarProductos(){     
        this.restaurante.registrarProductos(Producto);
        this.restaurante.listrarProductos();
    }
    listarPedidos(){
        this.restaurante.listarPedido()
    }
}
