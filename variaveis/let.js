function resultado() {
  // No let não é possivel desse jeto na função inteiro
  // O var quando colocado assim, já é acessivel a função inteiraq

  if (true) {
    let messagem = "Var é disponivel dentro da função!";
  }
  console.log(messagem);
}

let numero = 11;
numero = 25;
console.log(numero);
resultado();
