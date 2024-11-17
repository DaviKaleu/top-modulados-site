// Script para validação e envio do formulário de contato

// Função para validar o formulário e simular o envio
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio real do formulário

    // Coletando dados dos campos
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validando os campos
    if (email === '' || message === '') {
        showFeedback('Please fill in all fields.', 'error');
    } else if (!validateEmail(email)) {
        showFeedback('Please enter a valid email address.', 'error');
    } else {
        // Simulando o envio do formulário
        showFeedback('Your message has been sent successfully. We will get back to you soon!', 'success');
        clearForm();
    }
});

// Função para exibir feedback
function showFeedback(message, type) {
    const feedbackElement = document.getElementById('form-feedback');
    feedbackElement.textContent = message;
    feedbackElement.style.color = (type === 'success') ? 'green' : 'red';
}

// Função para limpar o formulário após o envio
function clearForm() {
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Função para validar o formato do e-mail
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
