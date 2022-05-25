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

