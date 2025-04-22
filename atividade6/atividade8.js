function calculoSalarioMensal(){
    let ganhoHora = parseFloat(document.getElementById("ganhoHora").value);
    let horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);

    let calculoSalarioMensal = ganhoHora * horasTrabalhadas;

    let resultado = document.getElementById("resultado").innerHTML = (`Seu salário deste mês é R$ ${calculoSalarioMensal.toFixed(2)}.`);

}