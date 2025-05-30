// 1 - Soma dos números pares
function somaPares(array) {
    return array.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}

// 2 - Filtrar palavras com mais de 4 letras
function palavrasComMaisDeQuatroLetras(array) {
    return array.filter(palavra => palavra.length > 4);
}

// 3 - Contar quantas vezes um número aparece no array
function contarOcorrencias(array, numero) {
    return array.filter(num => num === numero).length;
}

// 4 - Multiplicar todos os elementos do array por um número
function multiplicarArray(array, multiplicador) {
    return array.map(num => num * multiplicador);
}

// 5 - Inverter a ordem das palavras em uma string
function inverterPalavras(frase) {
    return frase.split(" ").reverse().join(" ");
}

// Exemplos de uso
console.log(somaPares([1, 2, 3, 4, 5, 6])); // 12
console.log(palavrasComMaisDeQuatroLetras(["bolacha", "pão", "macarrão", "feijão"])); // ["planeta", "estrela"]
console.log(contarOcorrencias([1, 2, 3, 2, 4, 2], 2)); // 3
console.log(multiplicarArray([1, 2, 3], 3)); // [3, 6, 9]
console.log(inverterPalavras("eu adoro programar")); // "programar adoro eu"