function abrirLoot(){
    const foto=event.currentTarget;
    foto.src="Chescos.jpg";
    const mensajin=document.querySelector("h1");
    mensajin.textContent="Preciona Y para guardar"
    foto.removeEventListener("click",abrirLoot);
}
const foto=document.querySelector("img");
foto.addEventListener("click", abrirLoot);
