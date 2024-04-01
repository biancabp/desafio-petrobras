// Função para lidar com o envio do formulário de detecção de outliers
const outlierForm = document.getElementById('outlierForm');
const outlierResult = document.getElementById('outlierResult');

outlierForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputData = document.getElementById('data').value;
    const outliers = removeOutlier(inputData.split(',').map(Number));
    outlierResult.innerHTML = `Outliers: ${outliers.join(', ')}`;
});

// Função para lidar com o envio do formulário de estimativa de vazão
const estimateForm = document.getElementById('estimateForm');
const estimateResult = document.getElementById('estimateResult');

estimateForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const q = parseFloat(document.getElementById('q').value);
    const n = parseFloat(document.getElementById('n').value);
    const a = parseFloat(document.getElementById('a').value);
    const p = parseFloat(document.getElementById('p').value);
    const s = parseFloat(document.getElementById('s').value);
    const estimatedFlow = estimate(q, n, a, p, s);
    estimateResult.textContent = `Estimativa de vazão: ${estimatedFlow}`;
});

// Função para lidar com o envio do formulário de integração numérica
const integrateForm = document.getElementById('integrateForm');
const integrateResult = document.getElementById('integrateResult');

integrateForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const integrateData = document.getElementById('integrateData').value;
    
    // Converta os dados para o formato necessário para a integração numérica
    const data = integrateData.split(',').map(item => {
        const [x, y] = item.trim().split(' ').map(Number);
        return { x, y };
    });
    
    try {
        // Chame a função de integração numérica e armazene o resultado
        const integrationResult = integrate(data);
        // Exiba o resultado na div "integrateResult"
        integrateResult.textContent = `Resultado da integração: ${integrationResult}`;
    } catch (error) {
        // Se ocorrer um erro, exiba uma mensagem de erro na div "integrateResult"
        integrateResult.textContent = `Erro: ${error.message}`;
    }
});


