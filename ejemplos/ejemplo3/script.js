function abrirLoot(){
    const foto=document.querySelector("img");
    foto.src="Chescos.jpg";
    foto.removeEventListener("click",abrirLoot);
}
const foto=document.querySelector("img");
foto.addEventListener("click", abrirLoot);
