const findTR = $("strong").click(function () {
    $(this).parent().parent().parent().css("background-color", "red")
})

const findTR2 = $("a").click(function () {
    $(this).parent().parent().css("background-color", "red")
})