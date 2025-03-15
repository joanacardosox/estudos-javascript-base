// Condicionais - else if -> se (condição) {bloco de código} senão se (condição) {bloco de código}

let temperatura = 36;

if (temperatura >= 37.5) {
  console.log("Está com febre");
} else if (temperatura < 37.5 && temperatura >= 37) {
  console.log("Procure um médico");
} else {
  console.log("Esta Saudável");
}
