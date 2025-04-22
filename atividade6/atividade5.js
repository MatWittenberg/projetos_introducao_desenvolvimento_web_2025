function conversorDeMEmCm(){
    let metros = parseFloat(document.getElementById("metros").value);

    let centimetros = metros * 100;

    let resultado = document.getElementById("resultado").innerHTML = (`O valor em centímetros é ${centimetros}.`);
}