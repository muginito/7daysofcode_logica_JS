const nome = document.querySelector("#user.nome")
const idade = document.querySelector("#user.idade")
const linguagem = document.querySelector("#user.linguagem")
const botao_confirma = document.querySelector(".confirmar")

botao_confirma.onclick = function(){
    document.write(`<p>Olá, ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value} !</p>`)
}
