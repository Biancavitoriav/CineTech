// Definindo variaveis e elementos html
const td = document.getElementsByTagName("td")
const assentos_selecionados = document.getElementById("assentos")
let valor_ingressos = document.getElementById("valor-ingressos")
const n_ingressos = document.getElementById("n-ingressos")
const addPipoca = document.getElementById("bt_adicionar_pipoca")
const removerPipoca = document.getElementById("bt_remover_pipoca")
const addRefri = document.getElementById("bt_adicionar_refri")
const removerRefri = document.getElementById("bt_remover_refri")
const n_pipocas = document.getElementById("n-pipocas")
const valor_pipocas = document.getElementById("valor-pipocas")
const n_refri = document.getElementById("n-refris")
const valor_refri = document.getElementById("valor-refris")
let valor_total = document.getElementById("valor-total")
let valorIngressos;
const indisponivel = []
let valorTotalCalculado;
const ocupado = []
const selecionado = []
let valorPipocaCalculado = 0
let quantidadePipocaCalculado = 0
let valorRefriCalculado = 0
let quantidadeRefriCalculado = 0
// Informando o nome do filme
const nomeFilme = document.getElementById("filme")
nomeFilme.textContent += localStorage.getItem("filme");
for (let i = 0; i < td.length - 9; i++) {
  if(td[i].textContent == ""){
    td[i].classList.add("indisponivel")
    indisponivel.push(td[i])
  } else if(td[i].innerHTML.includes('<s>')){
    td[i].innerHTML = td[i].textContent
    td[i].classList.add("ocupado")
    ocupado.push(td[i])
  } else{
    // Implementando a lógica de selecionar um assento
    td[i].classList.add("selecionado")
    td[i].addEventListener("click",()=>{
    td[i].classList.toggle("selecionado")
    assentos_selecionados.textContent = ""
    selecionado.length = 0
    for (let j = 0; j < td.length-9; j++) {
      if(td[j].classList.value == ""){
        // Adicionando os assentos nas tabelas
          selecionado.push(td[j])
          assentos_selecionados.innerText += td[j].textContent+",  "
          n_ingressos.innerText = selecionado.length
      }
    }
    // Informando o valor do ingresso
    valor_ingressos.textContent ="R$ "+ (selecionado.length*15).toFixed(2);
    atualizarTotal()
  })
}
}
// Implementando o adicionar pipoca
addPipoca.addEventListener("click",()=>{
  quantidadePipocaCalculado +=1
  valorPipocaCalculado = parseInt(valorPipocaCalculado) + 12;
  valor_pipocas.textContent= "R$ "+(valorPipocaCalculado).toFixed(2)
  n_pipocas.textContent = quantidadePipocaCalculado
  atualizarTotal()
})
// Implementando o remover pipoca
removerPipoca.addEventListener("click",()=>{
  if (quantidadePipocaCalculado - 1 >= 0) {
    quantidadePipocaCalculado -= 1;
    valorPipocaCalculado = parseInt(valorPipocaCalculado) - 12;
    valor_pipocas.textContent = "R$ " + valorPipocaCalculado.toFixed(2);
    n_pipocas.textContent = quantidadePipocaCalculado;
    atualizarTotal();
  }
})
// Implementando o adicionar refri
addRefri.addEventListener("click",()=>{
  quantidadeRefriCalculado +=1
  valorRefriCalculado = parseInt(valorRefriCalculado) + 10;
  valor_refri.textContent= "R$ "+(valorRefriCalculado).toFixed(2)
  n_refri.textContent = quantidadeRefriCalculado
  atualizarTotal()
})
// Implementando o remover refri
removerRefri.addEventListener("click", () => {
  if (quantidadeRefriCalculado - 1 >= 0) {
    quantidadeRefriCalculado -= 1;
    valorRefriCalculado = parseInt(valorRefriCalculado) - 10;
    valor_refri.textContent = "R$ " + valorRefriCalculado.toFixed(2);
    n_refri.textContent = quantidadeRefriCalculado;
    atualizarTotal();
  }
});
// Função que atualiza o total e manda informações para outra tela
function atualizarTotal (){
  valorIngressos = selecionado.length * 15;
  const valorTotalCalculado = valorPipocaCalculado + valorRefriCalculado + valorIngressos;
  valor_total.textContent = "R$ " + valorTotalCalculado.toFixed(2);
  localStorage.setItem("valorrefri", valorRefriCalculado)
  localStorage.setItem("quantidaderefri", quantidadeRefriCalculado)
  localStorage.setItem("quantidadepipoca", quantidadePipocaCalculado)
  localStorage.setItem("valorpipoca",valorPipocaCalculado)
  localStorage.setItem("quantidadeingresso", selecionado.length)
  localStorage.setItem("valoringresso", selecionado.length*15)
  localStorage.setItem("valortotal", valorTotalCalculado)
  console.log(valorTotalCalculado)
}
// Implementando o botão de finalizar
bt_finalizar.addEventListener("click",()=>{
  // Verificando se o usuário selecionou algum assento
  if(selecionado.length>0){
    window.location.href = "../Finalizar/finalizar.html";
  } else{
    window.alert("❌Selecione algum assento!❌")
  }
})


