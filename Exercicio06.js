const valores = [10, 12, 15, 35, 40];

function maioresQueMedia(valores){
    const soma = somaDosValores(valores);
    const media = soma / valores.length
    return valores.filter(valor => valor > media);
}

function menorValor(valores) {
        return Math.min(...valores);
}
function somaDosValores (valores){
    return valores.reduce((total, valor) => total + valor, 0);
}

function menoresQueVinte (valores){
    return valores.filter(valor => valor < 20);
}

console.log("Valores maiores que a média:", maioresQueMedia(valores));
console.log("Menor valor da lista:", menorValor(valores));
console.log("Soma dos itens da lista:", somaDosValores(valores));
console.log("Valores menores que 20:", menoresQueVinte(valores));

const numeros = [5, 12, 20, 7, 9];

const [primeiro, ...restante] = numeros;

console.log("Primeiro:", primeiro);
console.log("Restante:", restante);