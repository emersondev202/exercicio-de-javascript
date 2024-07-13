// Desenvolva uma função que receba um númerro como parâmetro 
// verefique se ele é par ou ímpar. Retorne true se for par
// e false se for ímpar
let num = 22
function parouimpar(num){
    let resto = num%2
    if(resto == 0){
        return true
    }else{
        return false
    }
}

console.log(parouimpar(num))