document.querySelector('#btnSub').addEventListener('click', e => {
    e.preventDefault();
    alert('Enviado');
    getInfoForm();
});

function newFormularios(apelido,pessoa,nome,cpf,genero,dtNasc,tel,email,senha,cidd,estado,cep,rua,numero,bairro){
    this.apelido = apelido;
    this.pessoa = pessoa;
    this.nome = nome;
    this.cpf = cpf;
    this.genero = genero;
    this.dtNasc = dtNasc;
    this.tel = tel;
    this.email = email;
    this.senha = senha;
    this.cidd = cidd;
    this.estado = estado;
    this.cep = cep;
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
}

const Campos = [];
function getInfoForm(){

        let camp ={
            apelido:document.querySelector('.apelido').value,
            pessoa: document.querySelector('#pessoa').value,
            nome:document.querySelector('.nome').value,
            cpf:document.querySelector('.cpf').value,
            genero:document.querySelector('#genero').value,
            dtNasc:document.querySelector('.dtNasc').value,
            tel:document.querySelector('.tel').value,
            email:document.querySelector('.email').value,
            senha:document.querySelector('.senha').value,
            cidd:document.querySelector('.cidd').value,
            estado:document.querySelector('.estado').value,
            cep:document.querySelector('.cep').value,
            rua:document.querySelector('.rua').value,
            numero:document.querySelector('.numero').value,
            bairro:document.querySelector('.bairro').value 
        }

        //console.log(camp);
        Campos.push(camp);
    
    localStorage.setItem('listaInfoUser', JSON.stringify(Campos));
}