class Tiempo{
    /**
     * 
     * @param {number} hora Hora del día en formato de 12 horas
     * @param {number} minuto Minutos de la hora
     * @param {string} periodo AM o PM
     */
    constructor(hora, minuto, periodo){
        this.hora = hora
        this.minuto = minuto
        this.periodo = periodo
    }
    getFormato12(){
        let horaCompleta = `${hora}:${this.minuto} ${periodo}`
        return(horaCompleta)
    }

    getFormato24(){
        if(this.periodo = "PM" || "pm" || "Pm"){ this.hora = this.hora + 12 }
    let horaCompleta = `${hora}:${this.minuto}`
    return(horaCompleta)
    }
}