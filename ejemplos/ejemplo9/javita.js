function tecladaso(event) {
    console.log('onKeyUp:' + event.key);
    console.log("Hola papus");
    const foto=document.querySelector("img");
    foto.src="Chescos.jpg";
    }
    
    document.addEventListener('keyup', tecladaso);