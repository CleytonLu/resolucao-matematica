function calcular(){
    valor = document.getElementById('valor').value

    result = Math.sqrt(valor)

        res.innerHTML = `<span style="background-color: orange;">&#8730;${valor} = ${result.toFixed(2)}</span>`
    
}