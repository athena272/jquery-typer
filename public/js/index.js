import { tamanhoTexto } from "./tamanhoTexto.js"
import { inicializaContadores } from "./inicializaContadores.js"
import { inicializaCronometro } from "./inicializaCronometro.js"
import { reiniciarGame } from "./reiniciarGame.js"

// Quando a página carregar
// $(document).ready 
$(
    function () {
        tamanhoTexto()
        inicializaContadores()
        inicializaCronometro()
        $("#reiniciar-game").click(reiniciarGame)
    }
)