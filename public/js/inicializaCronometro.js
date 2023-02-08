const campoDigitacao = $(".campo-digitacao")

export function inicializaCronometro() {
    // Sabe se o usuario entrou no campo e definir o tempo de digitacao
    let tempoRestante = $("#tempo-digitacao").text()
    campoDigitacao.one("focus", function () {
        // Desabilitar botao
        $("#reiniciar-game").attr("disabled", true)

        // A funcao setInverval sempre retorna o proprio ID
        const cronometroID = setInterval(function () {
            tempoRestante--
            $("#tempo-digitacao").text(tempoRestante)

            if (tempoRestante < 1) {
                campoDigitacao.attr("disabled", true)
                clearInterval(cronometroID)
                $("#reiniciar-game").attr("disabled", false)
            }
        }, 1000)
    })
}