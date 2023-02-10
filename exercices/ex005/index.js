//contador.js

const nomeMae = $("#nome-mae")
const nomePai = $("#nome-pai")

nomeMae.on("input", () => {
    nomePai.attr("disabled", true)
})

nomePai.on("input", () => {
    nomeMae.attr("disabled", true)
})