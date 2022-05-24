var idade = 15
if (idade >= 18 && idade < 65) {
    console.log(`voto obrigatório!`)
} else {
    if (idade < 16) {
        console.log(`não vota!`)
    } else {
        console.log(`voto facultativo!`)
    }
}