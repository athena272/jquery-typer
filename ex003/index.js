//main.js

const botao1 = $("#botao1")
botao1.on("click", () => {
    alert(
        "FUI CLICADO PARTE 1\n" +
        "HOYA WORLD!!!"
    )
})

const botao2 = $("#botao2")
botao2.on("click", exibirMensagem)

function exibirMensagem() {
    alert(
        "FUI CLICADO PARTE 2\n" +
        "HOYA WORLD!!!"
    )
}
