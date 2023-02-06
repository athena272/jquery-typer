// .text() sem parametro retorna o valor textual do elemento
// .text(param) com parametro seta o valor textual no elemento

const frase = $(".frase").text()
const palavras = frase.trim().split(" ")
const qtdPalavras = palavras.length

const tamanhoFrase = $("#tamanho-frase")
tamanhoFrase.text(qtdPalavras)

// Capturar tamanho da palavra e caracteres do campo de digitacao
const campoDigitacao = $(".campo-digitacao")
campoDigitacao.on("input", function () {
    const content = campoDigitacao.val()

    // Regular expression to remove backspace
    const qtdPalavrasCampo = content.split(/\S+/).length - 1
    $('#contador-palavras').text(qtdPalavrasCampo)

    const qtdCaracteresCampo = content.length
    $('#contador-caracteres').text(qtdCaracteresCampo)
})

// Sabe se o usuario entrou no campo
campoDigitacao.on("focus", function () {

})
