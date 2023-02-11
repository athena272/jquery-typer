export function showScore() {
    $(".placar").slideToggle(750)
    // $(".placar").toggle(1500)
}

export function insertScore() {
    const corpoTabela = $(".placar").find("tbody")
    const userName = "userName"
    const qtdPalavras = $('#contador-palavras').text()
    // const removeBtn = `<a href="#"><i class="small material-icons">delete</i></a>`
    // `<tr>` +
    //     `<td> ${userName} </td>` +
    //     `<td> ${qtdPalavras} </td>` +
    //     `<td> ${removeBtn} </td>` +
    //     `</tr>`

    const newLineTable = newLine(userName, qtdPalavras)
    newLineTable.find(".botao-remover").click(removeLine)

    corpoTabela.prepend(newLineTable)
    // corpoTabela.append(newLine)
}

function newLine(userName, qtdPalavras) {
    const line = $("<tr>")
    const columnUser = $("<td>").text(userName)
    const columnQtdPalavras = $("<td>").text(qtdPalavras)
    const columnBtnRemove = $("<td>")

    const link = $("<a>").attr("href", "#").addClass("botao-remover")
    const icon = $("<i>").addClass("small").addClass("material-icons").text("delete")

    // Icone dentro do <a>
    link.append(icon);

    // <a> dentro do <td>
    columnBtnRemove.append(link);

    // Os três <td> dentro do <tr>
    line.append(columnUser, columnQtdPalavras, columnBtnRemove)

    return line
}

function removeLine(ev) {
    ev.preventDefault()
    $(this).parent().parent().remove()
}

