function calcular(){
    cat1 = document.getElementById('cat1').value
    cat2 = document.getElementById('cat2').value
    hipo = document.getElementById('hipo').value
    res = document.getElementById('res')

    if(hipo == 0 || hipo == null){
        hipo = (cat1 * cat1) + (cat2 * cat2)
        res.innerHTML = `${hipo}`
    }

    if(cat1 == 0 || cat1 == null){
         
    }

}