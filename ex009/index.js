const cor = $("div").css("background-color")
// Também é possivel recuperar mais de um valor passando um array de propriedades, por exemplo:
const properties = $("div").css(["background-color", "width"]);

console.log(cor)
console.log(properties)
// O resultado é um objeto que possui todos os valores
console.log(properties.width)
console.log(properties["background-color"])