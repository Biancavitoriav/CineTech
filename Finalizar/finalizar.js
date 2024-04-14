// Definindo variaveis e elementos html
const n_ingressos = document.getElementById("n-ingressos")
const valor_ingressos = document.getElementById("valor-ingressos")
const valor_pipocas = document.getElementById("valor-pipocas")
const n_pipocas = document.getElementById("n-pipocas")
const valor_refris = document.getElementById("valor-refris")
const n_refris = document.getElementById("n-refris")
const valor_total = document.getElementById("valor-total")
// Pegando os valores da outra tela e implementando
valor_refris.textContent = "R$ "+parseInt(localStorage.getItem("valorrefri")).toFixed(2)
n_refris.textContent = localStorage.getItem("quantidaderefri")
valor_pipocas.textContent = "R$ "+parseInt(localStorage.getItem("valorpipoca")).toFixed(2)
n_pipocas.textContent = localStorage.getItem("quantidadepipoca")
valor_ingressos.textContent = "R$ "+parseInt(localStorage.getItem("valoringresso")).toFixed(2)
n_ingressos.textContent = localStorage.getItem("quantidadeingresso")
valor_total.textContent = "R$ "+parseInt(localStorage.getItem("valortotal")).toFixed(2)
const nomeFilme = document.getElementById("nomefilme")
nomeFilme.textContent += localStorage.getItem("filme");

// Implementando o botão pagar

const pix = document.getElementById('pix')
const img = document.createElement("img")
bt_pagar.addEventListener("click",()=>{
    if(pix.checked){
        img.setAttribute("src","../Imagens/imgPixSam.png")
        console.log("sim")
    }else{
        console.log('não')
    }
    
})

