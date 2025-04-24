function somaDeNumeros() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let soma = Number(numero1) + Number(numero2);

    let resultado = document.getElementById("resultado").innerHTML = (`A soma é ${soma}.`);
    }
