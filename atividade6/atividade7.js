function calculoAreaQuadrado(){
    let lado = parseFloat(document.getElementById("lado").value);
  
    let area = lado * lado;
    let dobro = area * 2;

    let resultado = document.getElementById("resultado").innerHTML = (`O valor da área do quadrado é ${area}. Seu dobro é ${dobro}.`);

}