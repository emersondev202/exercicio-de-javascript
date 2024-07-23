//Crie uma função que calcule o fatorial de um número. Utilize essa função para calcular o fatorial de diferentes números.
let num = 4
let ini = 1

function fatorial(numero){
    for(let i = 1;i <= num;i++){
    ini *= i
}
    return ini
}

console.log(fatorial(num))