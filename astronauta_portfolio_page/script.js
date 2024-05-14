document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Validate form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        // Validate name
        if (!nameInput.value) {
            displayError(nameInput, "Por favor, insira seu nome.");
            return false;
        } else {
            clearError(nameInput);
        }

        // Validate email
        if (!emailInput.value || !/^\S+@\S+\.\S+$/.test(emailInput.value)) {
            displayError(emailInput, "Por favor, insira um email válido.");
            return false;
        } else {
            clearError(emailInput);
        }

        // Validate subject
        if (!subjectInput.value) {
            displayError(subjectInput, "Por favor, insira o assunto.");
            return false;
        } else {
            clearError(subjectInput);
        }

        // Validate message
        if (!messageInput.value) {
            displayError(messageInput, "Por favor, insira a mensagem.");
            return false;
        } else {
            clearError(messageInput);
        }

        // Form is valid, submit data to email
        const formData = new FormData(form);
        fetch(form.getAttribute('action'), {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Envio bem-sucedido
                document.getElementById('success-message').style.display = 'block';
                form.reset(); // Limpa o formulário após o envio bem-sucedido
            } else {
                // Envio falhou
                alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
            }
        })
        .catch(error => {
            // Erro de rede
            alert("Ocorreu um erro de rede ao enviar o formulário. Por favor, verifique sua conexão e tente novamente.");
        });
    });

    // Função para exibir mensagens de erro
    function displayError(inputElement, errorMessage) {
        const errorElement = inputElement.nextElementSibling;
        errorElement.innerText = errorMessage;
        errorElement.style.display = 'block';
    }

    // Função para limpar mensagens de erro
    function clearError(inputElement) {
        const errorElement = inputElement.nextElementSibling;
        errorElement.innerText = '';
        errorElement.style.display = 'none';
    }
});