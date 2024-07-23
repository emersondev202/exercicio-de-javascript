//Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta. Utilize essa função para converter diferentes strings.
let frase = 'emerson'


function caixa_auta(letra){
    let letra_auta = letra.toUpperCase()
    return letra_auta
    
}

console.log(caixa_auta(frase))
