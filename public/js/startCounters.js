const campoDigitacao = $(".campo-digitacao")

export function startCounters() {
    campoDigitacao.on("input", function () {
        const content = campoDigitacao.val()

        // Regular expression to remove backspace
        const qtdPalavrasCampo = content.split(/\S+/).length - 1
        $('#contador-palavras').text(qtdPalavrasCampo)

        const qtdCaracteresCampo = content.length
        $('#contador-caracteres').text(qtdCaracteresCampo)
    })
}