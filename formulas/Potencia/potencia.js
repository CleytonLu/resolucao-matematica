function calcular(){
    valor = document.getElementById('valor').value
expoente = document.getElementById('expoente').value

result = Math.pow(valor, expoente)

res.innerHTML = `${result}`
}