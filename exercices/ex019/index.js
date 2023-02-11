// ======= SOLUTION 01 =======
// $("#botao-promocao").click(function () {
//     const promocoes = $(".promocoes")

//     if (promocoes.is(':visible')) {
//         promocoes.hide()
//     } else {
//         promocoes.show()
//     }
// })

// ======= SOLUTION 02 =======
// $("#botao-promocao").click(function () {
//     const promocoes = $(".promocoes")

//     promocoes.toggleClass("invisivel")
// })

// // ======= SOLUTION 03 =======
// $("#botao-promocao").click(function () {
//     const promocoes = $(".promocoes")

//     promocoes.toggle()
// })

// // ======= SOLUTION 04 =======
$("#botao-promocao").click(function () {
    const promocoes = $(".promocoes")

    if (promocoes.hasClass("invisivel")) {
        promocoes.removeClass("invisivel")
    } else {
        promocoes.addClass("invisivel")
    }
})