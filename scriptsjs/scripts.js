function cadastrar() {
    mensagem.innerHTML = "";
    let nome = ipt_nome.value;
    let email = ipt_email.value;
    let senha = ipt_senha.value;

    let arroba = "";
    let pontoCom = "";
    for (let i = 0; i <= email.length; i++) {
        if (email[i] == '@') {
            arroba = i
        };
            
        if (email[i] == '.' & email[i+1] == 'c' & email[i+2] == 'o' & email[i+3] == 'm') {
            pontoCom = i
        };
    };
    if (arroba > pontoCom || pontoCom - arroba <= 4 || arroba == '' || pontoCom == '') {
        mensagem.innerHTML = "Por favor insira um email válido";
    } else if (senha.length < 8) {
        mensagem.innerHTML = "Por favor insira uma senha de pelo menos 8 dígitos ";
    } else if (nome == "" || nome.length < l3) {
        mensagem.innerHTML = "Por favor insira uma nome valido"
    } else {
        mensagem.innerHTML = "Cadastrado com sucesso!!!"
    };
};