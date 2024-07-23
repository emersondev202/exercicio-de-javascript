//Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.
let num = 36
let cont = 0

function numero_primo(numero){
    for(let i =1;i <= num;i++){
        if(num%i==0){
            cont++
            }
        }
    if(cont == 2){
        return true
    }else{
        return false
    }
}

console.log(numero_primo(num))