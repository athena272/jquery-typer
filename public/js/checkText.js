const texto = $(".texto").text().trim()
const campoDigitacao = $(".campo-digitacao")

export function checkText() {
    campoDigitacao.on("input", function () {
        const digitado = campoDigitacao.val()
        // const pedacoComparavel = texto.substr(0, digitado.length)
        // MODERN WAY
        const digitadoCorretamente = texto.startsWith(digitado)
      
        if (digitadoCorretamente) {
            campoDigitacao.addClass("borda-verde")
            campoDigitacao.removeClass("borda-vermelha")

        } else {
            campoDigitacao.addClass("borda-vermelha")
            campoDigitacao.removeClass("borda-verde")

        }
        // ANOTHER WAY
        // var ehCorreto = (digitado === pedacoComparavel);

        // campo.toggleClass("borda-verde", ehCorreto);
        // campo.toggleClass("borda-vermelha", !ehCorreto);

    })
}