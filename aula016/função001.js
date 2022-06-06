function parimp(n) {// 'n' é o parâmetro
    if (n % 2 == 0) {// 'parimp()' é a função
        return 'Par!'// 'Par!' e 'Ímpar!' são o retorno 
    } else {
        return 'Ímpar!'
    }
}
var res = parimp(8) // A funcão tem que ser chamada p/ ser executada
console.log(res)    // ou 'console.log(parimp(8))'