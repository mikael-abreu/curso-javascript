
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (num.value.length == 0) {
        window.alert('Digite um número antes de adicionar!')
    } else {
        if (isNumero(num.value) && !inLista(num.value, valores)) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Número ${num.value} adicionado!`
            lista.appendChild(item)
            res.innerHTML = ``
        } else {
            window.alert('Número inválido ou já adiciondo!')
        }
        num.value = ''
        num.focus()
    }
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = Number(valores.length)
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = `<p>Foram cadastrados ${tot} números.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores digitados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores adicionados é ${media}.</p>`
    }
    
}