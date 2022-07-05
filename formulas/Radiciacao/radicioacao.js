function calcular(){
    valor = document.getElementById('valor').value
    var result;
    if(valor == 1){
        result = 1
    }else if(valor == 4){
        result = 2
    }else if(valor == 9){
        result = 3
    }else if(valor == 16){
        result = 4
    }else if(valor == 25){
        result = 5
    }else if(valor == 36){
        result = 6
    }else if(valor == 49){
        result = 7
    }else if(valor == 64){
        result = 8
    }else if(valor == 81){
        result = 9
    }else if(valor == 100){
        result = 10
    }

        res.innerHTML = `<span style="background-color: orange;">&#8730;${valor} = ${result}</span>`
    
}