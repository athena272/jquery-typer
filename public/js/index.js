
const frase = $(".frase").text() 
const palavras = frase.trim().split(" ")
const qtdPalavras = palavras.length

const tamanhoFrase = $("#tamanho-frase")
tamanhoFrase.text(qtdPalavras)

console.log(qtdPalavras)

// let str = "   Hello, World!   ";
// str = str.trim();
// console.log(str);  // Output: "Hello, World!"