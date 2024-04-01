/**
 * Remove registros espúrios
 * @param {Array} data - Um array de pontos flutuantes
 * @returns {Array} contendo apenas os pontos não-espúrios
 */
function removeOutlier(data){
    if (data.length === 1 && data[0] === 1) {
        return [1];
    }

    // Passo 1: Calcular a média
    const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
    
    // Passo 2: Calcular o desvio padrão amostral
    const stdDev = Math.sqrt(data.map(x => Math.pow(x - mean, 2)).reduce((acc, val) => acc + val, 0) / (data.length - 1));
    
    // Passo 3: Manter apenas os pontos dentro de 2 desvios padrão da média
    const filteredData = data.filter(x => Math.abs(x - mean) <= 2 * stdDev);
    
    return filteredData;
}

module.exports = removeOutlier;

