const Math = {};
function add(x1, x2) {
    return x1 + x2;
}
function substrac(x1, x2) {
    return x1 - x2;
}
function multiply(x1, x2) {
    return x1 * x2;
}
function divide(x1, x2) {
    if (x2 == 0) {
        console.log('no se puede dividir entre cero');
    } else {
        return x1 / x2;
    }
}
//exportar
exports.add = add;

Math.add = add;
Math.substrac = substrac;
Math.multiply = multiply;
Math.divide = divide;
Math.hello = hello;

function hello(name) {
    console.log('Hola', name);
}

//exportar objetos, funciones
module.exports = Math;