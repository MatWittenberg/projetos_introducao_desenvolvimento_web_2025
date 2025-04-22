function converterTemperatura(){
    let temperaturaFahrenheit = parseFloat(document.getElementById("temperaturaFahrenheit").value);

    let temperaturaCelsius = (temperaturaFahrenheit - 32) * (5 / 9);

    let resultado = document.getElementById("resultado").innerHTML = (`A temperatura em Celsius é ${temperaturaCelsius.toFixed(2)}.`);
}