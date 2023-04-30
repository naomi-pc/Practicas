class Aplicacion {
    constructor(contenedorRegalo, contenedorTitulo) {
        this.contenedorRegalo = contenedorRegalo;
        this.contenedorTitulo = contenedorTitulo;

        this.regaloAbierto = this.regaloAbierto.bind(this);
        this.regalos = [];
        this.cargarContenedorRegalo();
        this.regalosAbiertos = 0;
    }
    cargarContenedorRegalo() {
        for (const enlace of REGALOS_ENLACES) {
            const regalo = new Regalo(this.contenedorRegalo, enlace, this.regaloAbierto);
            this.regalos.push(regalo);
        }
    }

    regaloAbierto(){
        this.regalosAbiertos++;
        if(this.regalosAbiertos === this.regalos.length) {
            this.contenedorTitulo.textContent = 'Disftuta tus regalos';
        }
    }
}