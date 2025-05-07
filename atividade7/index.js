function validarFormulario() {
    let nomeInput = document.getElementById("nome");
    let emailInput = document.getElementById("email");
    let mensagemInput = document.getElementById("mensagem");
    let mensagemSucesso = document.getElementById("mensagemSucesso");

    let nome = nomeInput.value;
    let email = emailInput.value;
    let mensagem = mensagemInput.value;

    let nomeFalha = document.getElementById("nomeFalha");
    let emailFalha = document.getElementById("emailFalha");
    let mensagemFalha = document.getElementById("mensagemFalha");

    let isValid = true;

    nomeFalha.innerHTML = "";
    emailFalha.innerHTML = "";
    mensagemFalha.innerHTML = "";

    nomeInput.classList.remove("input-errado");
    emailInput.classList.remove("input-errado");
    mensagemInput.classList.remove("input-errado");


    if (nome.trim() === "") {
        nomeFalha.innerHTML = "Por favor, preencha o campo nome";
        nomeInput.classList.add("input-errado");
        isValid = false;
    }

    if (email.trim() === "") {
        emailFalha.innerHTML = "Por favor, preencha o campo email";
        emailInput.classList.add("input-errado");
        isValid = false;
    } else if (!validateEmail(email)) {
        emailFalha.innerHTML = "Por favor, insira um e-mail válido";
        emailInput.classList.add("input-errado");
        isValid = false;
    }

    if (mensagem.trim() === "") {
        mensagemFalha.innerHTML = "Por favor, escreva uma mensagem";
        mensagemInput.classList.add("input-errado");
        isValid = false;
    }
 
    if (isValid) {
        const msg = document.getElementById("mensagemSucesso");
        msg.style.display = "block";
        msg.style.opacity = "1";

        nomeInput.value = "";
        emailInput.value = "";
        mensagemInput.value = "";
    
        setTimeout(function () {
            let opacidade = 1;
            const intervalo = setInterval(function () {
                if (opacidade <= 0) {
                    clearInterval(intervalo);
                    msg.style.display = "none";
                } else {
                    opacidade -= 0.1;
                    msg.style.opacity = opacidade;
                }
            }, 100);
        }, 3000);
    }

    return false; 
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
