/*let amigo = []
console.log(typeof amigo)*/

let amigo = {nome:'jose', // p/ declarar um objeto usar {}
sexo: 'M', 
peso: 85.4,
engordar(p=0){//variável dentro do objeto
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}`)