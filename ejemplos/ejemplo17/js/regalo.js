class Regalo{
    constructor(containerElement, regaloSrc, callbackAbierto) {
        this.containerElement = containerElement;
        this.abrirRegalo = this.abrirRegalo.bind(this);
        this.callbackAbierto = callbackAbierto;

        this.regaloSrc = regaloSrc;
        this.image = document.createElement('img');
        this.image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
        this.image.addEventListener('click', this.abrirRegalo);
        this.containerElement.appendChild(this.image);
    }

    abrirRegalo(event) {
        this.image.src = this.regaloSrc;
        this.image.removeEventListener('click', this.abrirRegalo);
        this.callbackAbierto();
        console.log("Abierto");
    }
}