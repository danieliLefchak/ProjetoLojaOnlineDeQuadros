$(function(){
    $('#btnSub').click((e)=>{
        e.preventDefault();
        $('.erroCampos').remove();
        validaCamposForm();
    })

    $('#form input').change((e)=>{
        $('.erroCampos').remove();
        validaCamposForm();
    })
})

let erroCampos = `<div class="erroCampos"><span></span></div>`
let validaCampObrig = "Campo de preenchimento obrigatório.";
let validaTelFormat = "Formato de telefone é inválido.";
let validaSenha = "Senha no mínimo 4 e no maximo 8.";
let validaConfSenha = "Senha não está igual a senha anterior.";
let validaEmail = "Email invalido.";
let validaCep = "Cep invalido.";
let validaCpf = "CPF ou CNPJ invalido.";

function validaCamposForm(){
   $('#form input').each(function(){
        if($(this).val() === ""){
            $(this).addClass('erroBox');
            $(this).after(erroCampos);
            $('.erroCampos span').html(validaCampObrig);
            $(this).focus();

            return false;
        } else{
            $(this).removeClass('erroBox');
        }

        if($(this).hasClass('tel')){
            let tel = new RegExp(/^(\(?)[0-9]{2}(\)?)\s?[0-9]{4,5}(-?)[0-9]{4}$/);

            if(!tel.test($.trim($(this).val()))){
                $(this).addClass('erroBox');
                $(this).after(erroCampos);
                $('.erroCampos span').html(validaTelFormat);
                $(this).focus();
    
                return false;
            } else{
                $(this).removeClass('erroBox');
            }
        }

        if($(this).hasClass('senha')){
            if($(this).val().length>8 || $(this).val().length<4){
                $(this).addClass('erroBox');
                $(this).after(erroCampos);
                $('.erroCampos span').html(validaSenha);
                $(this).focus();
    
                return false;
            } else{
                $(this).removeClass('erroBox');
            }
        }

        if($(this).hasClass('confSenha')){
            if($(this).val() != ($('.senha').val())){
                $(this).addClass('erroBox');
                $(this).after(erroCampos);
                $('.erroCampos span').html(validaConfSenha);
                $(this).focus();
    
                return false;
            } else{
                $(this).removeClass('erroBox');
            }
        }

        if($(this).hasClass('email')){
            let em = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);

            if(!em.test($.trim($(this).val()))){
                $(this).addClass('erroBox');
                $(this).after(erroCampos);
                $('.erroCampos span').html(validaEmail);
                $(this).focus();
    
                return false;
            } else{
                $(this).removeClass('erroBox');
            }
        }
        
        if($(this).hasClass('cep')){
            let cp = new RegExp(/^[0-9]{5}(-?)[0-9]{3}$/);

            if(!cp.test($.trim($(this).val()))){
                $(this).addClass('erroBox');
                $(this).after(erroCampos);
                $('.erroCampos span').html(validaCep);
                $(this).focus();
    
                return false;
            } else{
                $(this).removeClass('erroBox');
            }
        }

        if($(this).hasClass('cpf')){//=== no lugar de <> para pegar os valores de cpf ou cnpj
            if($(this).val().length>14 || $(this).val().length<11){
                $(this).addClass('erroBox');
                $(this).after(erroCampos);
                $('.erroCampos span').html(validaCpf);
                $(this).focus();
    
                return false;
            } else{
                $(this).removeClass('erroBox');
            }
        }
    });
}
