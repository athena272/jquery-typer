import { tamanhoTexto } from "./tamanhoTexto.js"
import { inicializaContadores } from "./inicializaContadores.js"
import { inicializaCronometro } from "./inicializaCronometro.js"
import { reiniciarGame } from "./reiniciarGame.js"

import { checkTexto } from "./checkTexto.js"

// Quando a página carregar
// $(document).ready 
$(
    function () {
        tamanhoTexto()
        inicializaContadores()
        inicializaCronometro()
        checkTexto()
        $("#reiniciar-game").click(reiniciarGame)
    }
)