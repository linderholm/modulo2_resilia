function mostraModal (string) {

  if (string === "ok") {
    $("#confirma-nome").html(`Nome: ${cliente.nome} ${cliente.sobrenome}`).val();
    $("#confirma-cpf").html(`CPF: ${cliente.cpf}`);
    $("#confirma-rg").html(`RG: ${cliente.rg}`);
    $("#confirma-email").html(`E-mail: ${cliente.email}`);
    $("#confirma-endereco").html(`Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}. ${endereco.cidade}, ${endereco.estado}. CEP: ${endereco.cep}`);
} else {
  $("#confirma-nome").html(`Pode estar faltando alguma informação no seu cadastro. Por favor, verifique!`).val();
}
}


