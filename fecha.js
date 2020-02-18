class Fecha{
    /**
     * 
     * @param {date} fecha 
     */
    constructor(fecha){
        this.fecha = new Date
    }
    getAños(){
        let años =  2020 - getFullYear(this.fecha) 
        return(años)
    }

    getMeses(){
        let meses =  (2020 - getFullYear(this.fecha))*12
        return(meses)
    }

    getSemanas(){
        let semanas = ((2020 - getFullYear(this.fecha))*12)*4
        return(semanas)
    }
    getDias(){
        let dias = (2020 - getFullYear(this.fecha))*12*4*7
    }

    getFecha(){

    }
    getDiaFecha(){

    }
}