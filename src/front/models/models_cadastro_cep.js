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


class Endereco {
  constructor (cep, rua, cidade, estado, bairro, complemento, numero) {
    try {
        this.cep = cep;
        this.rua = rua;
        this.cidade = cidade;
        this.estado = estado;
        this.bairro = bairro;
        this.complemento = complemento;
        this.numero = numero;
      
    } catch (erro) {
      console.log(erro);
    }
  }

}


class Cliente {
  constructor (nome, sobrenome, rg, cpf, email, senha) {
    try {
        this.nome = nome; 
        this.sobrenome = sobrenome;
        this.rg = rg;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
       } catch (erro) {
      console.log(erro);
  }
}
}
