$('#cadastro-cep').on('blur', function() {
  let cep = $("#cadastro-cep").val()
  
  $.ajax({
    url: `https://viacep.com.br/ws/${cep}/json/`,
    type: "GET",
    dataType: 'json',

    success: function(result) {
      console.log(result);

      if (result.erro == "true") {
        $('#cadastro-cep').removeClass("form-control").addClass("form-control is-invalid");
      } else {
        $('#cadastro-cidade').val(result.localidade);
        $('#cadastro-estado').val(result.uf);
        $('#cadastro-bairro').val(result.bairro);
        $('#cadastro-rua').val(result.logradouro);
      }
          
    },

    error: function() {
      $('#cadastro-cep').removeClass("form-control").addClass("form-control is-invalid");
    }

  })
  
})

function validaCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
if (strCPF == "00000000000") return false;

for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
  return true;
}



$('#cadastro-cpf').on('blur', () => {
 let cpf = $('#cadastro-cpf').val()
  if (validaCPF(cpf) === false) {
    $('#cadastro-cpf').removeClass("form-control").addClass("form-control is-invalid");
    alert("verifique o cpf")
  } else {
    $('#cadastro-cpf').removeClass("form-control is-invalid").addClass("form-control");
  }
}) 

function validacaoEmail(email) {
  if (email.indexOf('@') == -1 || email.indexOf('.') == -1 || email.indexOf(" ") > 0 || email.length < 10) {
  return false;
} else {
  return true;
}
}

$('#cadastro-email').on('blur', () => {
  if (validacaoEmail($('#cadastro-email').val()) == false) {
    $('#cadastro-email').removeClass("form-control").addClass("form-control is-invalid");
  }else {
    $('#cadastro-email').removeClass("form-control is-invalid").addClass("form-control");
  }
})



let cliente = []
let endereco = []

class Cadastro {
  constructor () {
    this.cadastro = []
  }

  addCadastro () {

    const nome = $("#cadastro-nome").val();
    const sobrenome = $("#cadastro-sobrenome").val();
    const rg = $("#cadastro-rg").val();
    const cpf = $("#cadastro-cpf").val();
    const email = $("#cadastro-email").val();
    const senha = $("#cadastro-senha").val();
    const cep = $("#cadastro-cep").val();
    const cidade = $("#cadastro-cidade").val();
    const estado = $("#cadastro-estado").val();
    const bairro = $("#cadastro-bairro").val();
    const rua = $("#cadastro-rua").val();
    const numero = $("#cadastro-numero").val();
    const complemento = $("#cadastro-complemento").val();

    cliente = new Cliente(nome, sobrenome, rg, cpf, email, senha);

    endereco = new Endereco(cep, rua, cidade, estado, bairro, complemento, numero);

    this.cadastro.push(cliente);
    this.cadastro.push(endereco);

    console.log(this.cadastro);
    }

}

function valida () {
  'use strict';
  window.addEventListener('load', function() {
 
    var forms = document.getElementsByClassName('needs-validation');

    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('click', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          
        }
        else {
          form.classList.add('was-validated');
        }
        
      }, false);
    });
  }, false);
};

valida()

$("#btn-submit").on("click", function (evento){
  evento.preventDefault()
  
  let cadastro = new Cadastro
  cadastro = cadastro.addCadastro()
  
  mostraModal('ok')
 
})

let modal = document.querySelector("#exampleModal");
  modal.addEventListener('click', function (){
    $('#exampleModal').addClass('d-none')
  })