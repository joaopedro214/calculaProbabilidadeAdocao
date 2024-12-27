document.addEventListener('DOMContentLoaded', function() {
    function calcularProbabilidadeAdocao() {
    let peso = document.getElementById('peso').value;
    let idade = document.getElementById('idade').value;

    let nota = 10;

    if (peso > 20) {
        nota -= 4;
    }else if (peso > 10) {
        nota -= 2;
    }

    if (idade >= 14) {
        nota = nota - 4;
    }else if (idade >= 8) {
        nota = nota - 2;
    }

    return nota;
    }
    function mostrarProbabilidade() {
        let probabilidade = calcularProbabilidadeAdocao();
        document.getElementById('resultado').textContent = 'A probabilidade de adoção é: ' + probabilidade + '/10';
        alert('A probabilidade de adoção é: ' + probabilidade + '/10');
    }
    document.getElementById('calcularBtn').addEventListener('click', mostrarProbabilidade); 
});