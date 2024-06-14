document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario");
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");
    const idadeInput = document.getElementById("idade");
    const infosDiv = document.getElementById("informacoes");
    const valorTMB = document.getElementById("valor");
    const descricao = document.getElementById("descricao");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);
        const idade = parseInt(idadeInput.value);

        if (isNaN(peso) || isNaN(altura) || isNaN(idade) || peso <= 0 || altura <= 0 || idade <= 0) {
            alert("Por favor, insira valores válidos.");
            return;
        }

        const tmb = calcularTMB(peso, altura, idade);

        valorTMB.textContent = tmb.toFixed(2);
        descricao.textContent = "Calorias por dia";

        infosDiv.classList.remove("escondido");
    });

    function calcularTMB(peso, altura, idade) {
        // Fórmula de Harris-Benedict para homens e mulheres
        // TMB = 66.5 + (13.75 * peso) + (5.003 * altura) - (6.755 * idade)  (Homens)
        // TMB = 655.1 + (9.563 * peso) + (1.850 * altura) - (4.676 * idade)  (Mulheres)
        // Aqui assumimos a fórmula para homens como exemplo.
        return 66.5 + (13.75 * peso) + (5.003 * altura * 100) - (6.755 * idade);
        
    }
});
