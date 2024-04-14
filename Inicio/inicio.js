// Definindo variaveis e elementos html
const homemaranha = document.getElementById("homemaranha")
const toystory = document.getElementById("toystory")
const duna = document.getElementById("duna")

// Direcionando o usuário para outra página e mandando o filme selecionado
homemaranha.addEventListener("click",()=>{
    localStorage.setItem("filme","Homem-Aranha")
    window.location.href = "../Comprar/index.html";
})
duna.addEventListener("click",()=>{
    localStorage.setItem("filme","Duna");
    window.location.href = "../Comprar/index.html";
})
toystory.addEventListener("click",()=>{
    localStorage.setItem("filme","Toy Story")
    window.location.href = "../Comprar/index.html";
})
