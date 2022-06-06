let num = [5, 8, 2, 9, 3]
num[5] = 0 //adiciona 0 na posição 5
num.push(7)//adiciona 7 no final
num.sort()//coloca os elementos em ordem 
console.log(num)
console.log(`O array tem ${num.length} elementos.`)//num.length mostra quantos elementos o array
console.log(`a posição 5 tem o valor ${num[5]}`)

for (let n = 0;n < num.length;n = n + 1){
    console.log(num[n])
}