//Desenvolvido por: Bianca Bezerra Pires

/**
 * Remove registros espúrios
 * @param {Array} data - Um array de pontos flutuantes
 * @returns {Array} contendo apenas os pontos não-espúrios
 */
function removeOutlier(data) {
    const todosIguais = data.every((valor, indice, array) => valor === array[0]);

    return todosIguais ? data : data.filter(ponto => {
        const media = data.reduce((acumulador, valor) => acumulador + valor, 0) / data.length;

        const desvioPadrao = Math.sqrt(data.map(ponto => Math.pow(ponto - media, 2)).reduce((acumulador, valor) => acumulador + valor, 0) / (data.length - 1));

        return Math.abs(ponto - media) <= 2 * desvioPadrao;
    });
}

module.exports = removeOutlier;