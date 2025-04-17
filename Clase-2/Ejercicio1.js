console.log("Arranca el ejercicio");

function esPalindromo(palabra) {
  let nuevaPalabra = palabra.split("").reverse().join("");
  console.log(nuevaPalabra);

  return nuevaPalabra.toLowerCase() === palabra.toLowerCase();
  // deberia retornar true o false en caso de que sea palindromo
}

function verificarPalindromo(palabras) {
  // Palindromo se le dice a una palabra que se lee igual de atras hacia adelante que como de adelante hacia atras

  let palindromos = [];
  let noPalindromos = [];

  // Hay que iterar palabras
  for (let index = 0; index < palabras.length; index++) {
    if (esPalindromo(palabras[index])) {
      palindromos.push(palabras[index]);
    } else {
      noPalindromos.push(palabras[index]);
    }
  }

  return {
    "Es Palindromo:": palindromos,
    "No es palindromo:": noPalindromos,
  };
}

const palabras = [
  "Neuquen",
  "Sol",
  "Hola",
  "Ana",
  "Oso",
  "Saludo",
  "Reconocer",
];

const resultado = verificarPalindromo(palabras);

console.log(resultado);
