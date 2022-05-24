var agora = new Date()
var diaSem = agora.getDay()

var diaSem = 8
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/ 
//console.log(diaSem)

switch(diaSem){ // case é mais limitado que "if" e "else"
                // usado em casos específicos
                // se precisar usar intervalos de dados tipo "a > x && a < y" usar "if" e "else"!
    case 0:
        console.log('domingo')
        break // break é obrigatório!!! Não esquecer!!!
    case 1:
        console.log('segunda-feira')
        break
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('quarta-feira')
        break
    case 4:
        console.log('quinta-feira')
        break
    case 5:
        console.log('sexta-feira')
        break
    case 6:
        console.log('sabado')
        break      
    default:
        console.log('[ERRO] Dia inválido!')
        break
}