let nome = 'anilina'
let nome_invertido = inverte_nome(nome)
function inverte_nome(name){
    let inverter = name.split('')
    inverter = inverter.reverse()
    inverter = inverter.join('')
    return inverter
}

function conferir_inversao(n,v){
    if(n == v){
        return true
    }else{
        return false
    }
}

console.log(conferir_inversao(nome,nome_invertido))