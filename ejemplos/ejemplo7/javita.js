function abrirLoot(){
    const nuevoJeder=document.createElement("h1");
    nuevoJeder.textContent="Preciona Y para guardar";

    const regaloCerrado=document.querySelector("#regalo-cerrado");
    const regaloAbierto=document.querySelector("#regalo-abierto");
    regaloCerrado.classList.add("oculto");
    regaloAbierto.classList.remove("oculto");
}
const foto=document.querySelector("#regalo-cerrado");
foto.addEventListener("click", abrirLoot);