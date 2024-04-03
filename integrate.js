// Desenvolvido por: Bianca Bezerra Pires

/**
 * Realiza a integração pelo método dos trapézios
 * @param {Array} data Array de objetos que contém pares (x,y)
 * @returns {number} Valor total da integral numérica
 */
function integrate(dados) {
    let integral = 0;
    
    dados = Array.isArray(dados) && dados.length >= 2 ? dados : [];

    const isValido = dados.every(item => typeof item === 'object' && typeof item.x === 'number' && typeof item.y === 'number');

    const mensagemDeErro = 'Os elementos do array devem ser objetos com propriedades numéricas x e y.';
    isValido || (() => { throw new Error(mensagemDeErro); })();

    integral = dados.reduce((acc, val, index, arr) => {
        const deltaX = index < arr.length - 1 ? arr[index + 1].x - val.x : 0;
        return acc + (val.y + (index < arr.length - 1 ? arr[index + 1].y : 0)) * deltaX / 2;
    }, 0);

    return integral;
}

module.exports = integrate;



