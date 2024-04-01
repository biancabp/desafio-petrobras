/**
 * Realiza a integração pelo método dos trapézios
 * @param {Array} data Array de objetos que contém pares (x,y)
 * @returns {number} Valor total da integral numérica
 */
function integrate(data) {
    let integral = 0;
    
    if (!Array.isArray(data) || data.length < 2) {
        return integral; // Retorna zero se o array tiver menos de dois elementos
    }

    // Iterar sobre os dados para calcular a integral usando o método dos trapézios
    for (let i = 0; i < data.length - 1; i++) {
        // Verificar se cada elemento do array é um objeto com propriedades x e y
        if (typeof data[i] !== 'object' || typeof data[i].x !== 'number' || typeof data[i].y !== 'number' ||
            typeof data[i + 1] !== 'object' || typeof data[i + 1].x !== 'number' || typeof data[i + 1].y !== 'number') {
            throw new Error('Os elementos do array devem ser objetos com propriedades x e y numéricas.');
        }

        integral += (data[i].y + data[i + 1].y) * (data[i + 1].x - data[i].x) / 2;
    }

    return integral;
}

module.exports = integrate;




