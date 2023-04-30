function abrirLoot(){
    const foto=event.currentTarget;
    foto.src="Chescos.jpg";
    foto.removeEventListener("click",abrirLoot);
}
const foto=document.querySelector("img");
foto.addEventListener("click", abrirLoot);
