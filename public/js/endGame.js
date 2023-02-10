import { insertScore } from "./insertScore.js"

const campoDigitacao = $(".campo-digitacao")

export function endGame() {
    campoDigitacao.attr("disabled", true)

    $("#reiniciar-game").attr("disabled", false)
    campoDigitacao.addClass("campo-desabilitado")
    // campoDigitacao.toggleClass("campo-desabilitado")

}