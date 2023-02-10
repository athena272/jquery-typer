// .text() sem parametro retorna o valor textual do elemento
// .text(param) com parametro seta o valor textual no elemento

// Capturar tamanho da palavra e caracteres do campo de digitacao
export function getSizeText() {
    const texto = $(".texto").text()
    const palavras = texto.trim().split(" ")
    const qtdPalavras = palavras.length

    const tamanhoFrase = $("#tamanho-texto")
    tamanhoFrase.text(qtdPalavras)
}