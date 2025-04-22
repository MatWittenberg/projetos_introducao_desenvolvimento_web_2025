function converterTemperatura(){
    let temperaturaCelsius = parseFloat(document.getElementById("temperaturaCelsius").value);

    let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

    let resultado = document.getElementById("resultado").innerHTML = (`A temperatura em Fahrenheit é ${temperaturaFahrenheit.toFixed(2)}.`);
}

