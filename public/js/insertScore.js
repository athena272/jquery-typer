export function insertScore() {
    const corpoTabela = $(".placar").find("tbody")
    const userName = "userName"
    const qtdPalavras = $('#contador-palavras').text()
    const removeBtn = `<a href="#"><i class="small material-icons">delete</i></a>`

    const newLine = `<tr>` +
        `<td> ${userName} </td>` +
        `<td> ${qtdPalavras} </td>` +
        `<td> ${removeBtn} </td>` +
        `</tr>`

    corpoTabela.prepend(newLine)
    // corpoTabela.append(newLine)
}