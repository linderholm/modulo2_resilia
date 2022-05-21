// function TestaCPF(strCPF) {
//     var Soma;
//     var Resto;
//     Soma = 0;
//   if (strCPF == "00000000000") return false;

//   for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
//   Resto = (Soma * 10) % 11;

//     if ((Resto == 10) || (Resto == 11))  Resto = 0;
//     if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

//   Soma = 0;
//     for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
//     Resto = (Soma * 10) % 11;

//     if ((Resto == 10) || (Resto == 11))  Resto = 0;
//     if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
//     return true;
// }

// function validacaoEmail(email) {
//   usuario = email.value.substring(0, email.value.indexOf("@"));
//   dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
  
//   if ((usuario.length >=1) &&
//       (dominio.length >=3) &&
//       (usuario.search("@")==-1) &&
//       (dominio.search("@")==-1) &&
//       (usuario.search(" ")==-1) &&
//       (dominio.search(" ")==-1) &&
//       (dominio.search(".")!=-1) &&
//       (dominio.indexOf(".") >=1)&&
//       (dominio.lastIndexOf(".") < dominio.length - 1)) {
//       return true;
//   }
//   else{
//     return false;
//   }
//   }

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

    const cliente = new Cliente(nome, sobrenome, rg, cpf, email, senha);

    const endereco = new Endereco(cep, rua, cidade, estado, bairro, complemento, numero);

    this.cadastro.push(cliente);
    this.cadastro.push(endereco);

    console.log(this.cadastro);
    }

}

let cadastroFinal = new Cadastro()
$("#btn-submit").on('click', function(event){
  event.preventDefault();
  console.log(cadastroFinal.addCadastro())

  // let formulario = document.querySelector("#formulario-cadastro");
  // formulario.reset();

})
