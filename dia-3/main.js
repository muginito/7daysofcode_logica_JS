let lista_de_aprendizado = []
let lista =[]

let area = prompt('Qual área deseja seguir?\nFront-End ou Back-End?')

function addLista(escolha){
    lista_de_aprendizado = lista_de_aprendizado.concat(escolha.toLowerCase())
}

if (area.toLowerCase() === "front-end"){
    tec = prompt('Qual deseja aprender?\nReact ou Vue')
    addLista(tec)
}

if (area.toLowerCase() === "back-end"){
    tec = prompt('Qual deseja aprender?\nC# ou Java')
    addLista(tec)
}

let input2 = prompt('Pretende:\n1 - Especializar na área\n2 - Se tornar Fullstack?')

if (input2 == 1){
    prompt('Quais tecnologias pretende se especializar?')
    addLista(tec)
}

if (input2 == 2){
    tec = prompt('Quais tecnologias gostaria de aprender como Fullstack?')
    addLista(tec)
}
