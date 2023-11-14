//CÒDIGO 1
// $('#botao-promocao').click(function () {

//     var promocoes = $('.promocoes');
//     if (promocoes.is(':visible')) {

//         promocoes.hide();
//     } else {
//         promocoes.show();
//     }

// });

//CODIGO 2

// $('#botao-promocao').click(function () {

//     var promocoes = $('.promocoes');
//     if (promocoes.hasClass('invisivel')) {

//         promocoes.removeClass('invisivel');
//     } else {
//         promocoes.addClass('invisivel');
//     }

// });

//CODIGO 3
$('#botao-promocao').click(function () {

    $('.promocoes').toggleClass('invisivel');

});

// A função toogleClass (não confundir com a função toggle) adiciona uma classe caso ela não exista no elemento. Se existir, ela remove a classe.

//CODIGO 4
$('#botao-promocao').click(function () {

    $('.promocoes').toggle();

});

//   A função toggle é um atalho para as funções hide e show.Quando ela é chamada para um elemento visível, o elemento fica invisível.Quando é chamada para um elemento invisível, ela torna o elemento visível.