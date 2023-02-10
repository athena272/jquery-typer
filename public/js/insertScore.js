export function insertScore() {
    const corpoTabela = $(".placar").find("tbody")
    const userName = "userName"
    const qtdPalavras = $("#contador-palavras").text()

    const newLine = `<tr>` +
        `<td> ${userName} </td>` +
        `<td> ${qtdPalavras} </td>` +
        `</tr>`
    

    corpoTabela.prepend(newLine)
    // corpoTabela.append(newLine)

}