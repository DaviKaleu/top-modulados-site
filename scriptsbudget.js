document.getElementById('budget-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegando os valores inseridos
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const depth = parseFloat(document.getElementById('depth').value);

    // Validação para garantir que os valores sejam positivos e válidos
    if (isNaN(width) || isNaN(height) || isNaN(depth) || width <= 0 || height <= 0 || depth <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Cálculo da área e custo
    const area = width * height * depth; // Exemplo de cálculo de área (em cm³)
    const cost = area * 50; // Exemplo de custo por cm³ (ajuste conforme necessário)

    // Exibindo o resultado
    document.getElementById('result').style.display = 'block';
    document.getElementById('result-area').innerText = `Area: ${area.toFixed(2)} cm³`;
    document.getElementById('result-cost').innerText = `Total Cost: R$ ${cost.toFixed(2)}`;
});
