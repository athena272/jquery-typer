import { getSizeText } from "./getSizeText.js"
import { startCounters } from "./startCounters.js"
import { startStopwatch } from "./startStopwatch.js"
import { restartGame } from "./restartGame.js"
import { showScore } from "./insertScore.js"

import { checkText } from "./checkText.js"

// Quando a página carregar
// $(document).ready 
$(
    function () {
        getSizeText()
        startCounters()
        startStopwatch()
        checkText()
        $("#reiniciar-game").click(restartGame)
        $("#botao-placar").click(showScore)
    }
)