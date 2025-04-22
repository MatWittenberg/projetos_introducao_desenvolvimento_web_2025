function calculoArea(){
    let raio = parseFloat(document.getElementById("raio").value);
    const pi = parseFloat(3.14);

    let area = pi * (raio * raio);

    let resultado = document.getElementById("resultado").innerHTML = (`O valor da área do círculo é ${area}.`);

}