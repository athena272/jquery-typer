import { tamanhoTexto } from "./tamanhoTexto.js"
import { inicializaContadores } from "./startStopwatch.js"
import { inicializaCronometro } from "./inicializaCronometro.js"
import { reiniciarGame } from "./reiniciarGame.js"

import { checkText } from "./checkText.js"

// Quando a página carregar
// $(document).ready 
$(
    function () {
        tamanhoTexto()
        inicializaContadores()
        inicializaCronometro()
        checkText()
        $("#reiniciar-game").click(reiniciarGame)
    }
)