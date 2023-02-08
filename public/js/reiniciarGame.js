// $("#reiniciar-game").on("click", function () {
//     console.log("Botao clicado")
// })
import { inicializaCronometro } from "./inicializaCronometro.js"

const tempoInicial = $("#tempo-digitacao").text()
const campoDigitacao = $(".campo-digitacao")

export function reiniciarGame() {
    // Reiniciar campo
    campoDigitacao.attr("disabled", false)
    campoDigitacao.val("")

    // Reiniciar palavras e caracteres
    $('#contador-palavras').text("0")
    $('#contador-caracteres').text("0")

    // Reinicar tempo
    $("#tempo-digitacao").text(tempoInicial)
    inicializaCronometro()
}