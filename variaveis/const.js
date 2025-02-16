//Quando o valor da variavel não precisar mudar use const

function exemploConst() {
  if (true) {
    const messagem = "Const é disponivel dentro da função!";
    console.log(messagem);
  }
}

const numero = 11;
console.log(numero);
exemploConst();
