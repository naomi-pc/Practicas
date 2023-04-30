function saludar(saludarFuncion) {
    saludarFuncion();
}

const saludoInternacional = function() {
    console.log('Hola Mundo');
}

const saludoMexicano = () => {
    console.log('Quihunole!');
}

saludar(saludoInternacional);
saludar(saludoMexicano);