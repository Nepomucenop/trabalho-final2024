document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();


    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);

    // Verificar se os valores são válidos
    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    
    const tmb = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);

   
    document.getElementById('valor').innerText = tmb.toFixed(2);
});