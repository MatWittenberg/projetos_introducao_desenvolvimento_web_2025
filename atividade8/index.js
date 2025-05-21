document.getElementById('calculadoraFitness').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const atividade = parseFloat(document.getElementById('atividade').value);
    const metaKg = parseFloat(document.getElementById('metaKg').value);
    const prazoDias = parseInt(document.getElementById('prazoDias').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
  
 
    let tmb;
    if (sexo === 'masculino') {
      tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
    } else {
      tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
    }
  
    const gastoTotal = tmb * atividade;

    const aguaIdeal = peso * 35;

    const deficitTotal = metaKg * 7700;
    const deficitDiario = deficitTotal / prazoDias;
  
    const gastoCaminhada = 0.5 * peso * distancia;
  

    const resultadoCalculado = `
      <h2>Resultados para ${nome}</h2>
      <p><strong>TMB:</strong> ${tmb.toFixed(2)} kcal/dia</p>
      <p><strong>Gasto calórico total diário:</strong> ${gastoTotal.toFixed(2)} kcal</p>
      <p><strong>Água ideal por dia:</strong> ${aguaIdeal.toFixed(0)} ml</p>
      <p><strong>Déficit diário necessário para perder ${metaKg} kg em ${prazoDias} dias:</strong> ${deficitDiario.toFixed(2)} kcal/dia</p>
      <p><strong>Gasto calórico em ${distancia} km de caminhada:</strong> ${gastoCaminhada.toFixed(2)} kcal</p>
    `;
  
    document.getElementById('resultadoCalculado').innerHTML = resultadoCalculado;
  });
  
