let num = [9, 3, 2, 6, 4, 8, 6]

let pos = num.indexOf(8)

if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

//indexOf verifica se tem o valor, se tiver ele retorna a posição
//se nao tiver ele retorna -1
