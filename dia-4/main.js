const numeroAleatorio = Math.floor(Math.random()* 11);
let tentativas  = 3;

alert("Este é o jogo da adivinhação.");
alert("Você deve adivinhar um número de 0 a 10 em três tentativas.");

for (tentativas = 3; tentativas > 0; tentativas --){
    resposta = prompt("Digite um número: ");
    if (resposta > 10 || resposta < 0){
        alert("Número inválido.\n*O número deve estar entre 0 e 10* ")
        tentativas++;
        continue
    }
    if (tentativas == 1 && resposta != numeroAleatorio){
        alert("Você perdeu! Tente na próxima.");
        break
    } else if (resposta == numeroAleatorio){
        alert("Você acertou!!")
        break
    } else {
        alert("Voecê errou! Tente novamente.")
    }
}