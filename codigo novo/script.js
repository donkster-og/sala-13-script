function somar(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber 
    var resp = document.getElementById("respostaSOM")
    resp.textContent = n1 + n2
}

    function dividir(){
    var n3 = parseFloat(document.getElementById("n3").value)
    var n4 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("respostaDIV")

    if(n4 !==0){
        resp.textContent = n3 / n4.toFixed(2)
    }else{
        resp.textContent = "Não se divide por 0."
    }

}

     function multiplicar(){
    var n5 = parseFloat(document.getElementById("n5").value)
    var n6 = parseFloat(document.getElementById("n6").value)
    var resp = document.getElementById("respostaMULT")
    resp.textContent = n5 * n6.toFixed(2)
}

    function subtrair(){
    var n7 = document.getElementById("n7").valueAsNumber
    var n8 = document.getElementById("n8").valueAsNumber 
    var resp = document.getElementById("respostaSUB")
    resp.textContent = n7 - n8
}