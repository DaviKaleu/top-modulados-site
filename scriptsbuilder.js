document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegando os valores dos campos do formulário
    const projectName = document.getElementById('project-name').value;
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const depth = parseFloat(document.getElementById('depth').value);

    // Validação para garantir que os valores sejam válidos
    if (projectName === "" || isNaN(width) || isNaN(height) || isNaN(depth) || width <= 0 || height <= 0 || depth <= 0) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Exibindo o nome do projeto e suas dimensões
    document.getElementById('result').style.display = 'block';
    document.getElementById('result-name').innerText = `Project Name: ${projectName}`;
    document.getElementById('result-dimensions').innerText = `Dimensions: ${width} x ${height} x ${depth} cm`;
});
