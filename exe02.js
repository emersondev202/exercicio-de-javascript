//Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado. Utilize essa função para calcular a média de diferentes conjuntos de números.
let array = [3,5,6,7,88,5,33]

function media(num){
    let soma = 0
    for(let i = 0;i <= num.length - 1;i++){
        soma += num[i]
    }
    let media = soma/num.length
    console.log(media) 
}
media(array)

