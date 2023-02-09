const texto = $(".texto").text().trim()
const campoDigitacao = $(".campo-digitacao")

export function checkTexto() {
    campoDigitacao.on("input", function () {
        const digitado = campoDigitacao.val()
        const pedacoComparavel = texto.substr(0, digitado.length)

        if (digitado === pedacoComparavel) {
            campoDigitacao.addClass(".borda-verde")
            campoDigitacao.removeClass(".borda-vermelha")

        } else {
            campoDigitacao.addClass(".borda-vermelha")
            campoDigitacao.removeClass(".borda-verde")

        }

    })
}