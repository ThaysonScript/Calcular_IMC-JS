const calcular = document.getElementById('calcular');

calcularIMC = () => {
    
    const nome = document.getElementById('nome').value; // pegue resultado desta caixa com o value
    const altura = document.getElementById('altura').value; // pegue resultado desta caixa com o value
    const peso = document.getElementById('peso').value; // pegue resultado desta caixa com o value
    const resultado = document.getElementById('resultado'); // pegue a caixa e atribua um valor a ela


    if(nome !== '' && altura !== '' && peso !== '') {

        const valorImc = (peso / (altura * altura)).toFixed(2);

        console.log(valorImc)

        let classificacaoPeso = '';

        if(valorImc < 18.5) {
            classificacaoPeso = 'Está abaixo do peso!';
        }
        else if(valorImc >= 18.5 && valorImc < 25) {
            classificacaoPeso = 'Está com peso ideal, parabéns!';
        }
        else if(valorImc >= 25 && valorImc < 30) {
            classificacaoPeso = 'Está levemente acima do peso';
        }
        else if(valorImc >= 30 && valorImc < 35) {
            classificacaoPeso = 'Está com obesidade de grau 1';
        }
        else if(valorImc >= 35 && valorImc < 40) {
            classificacaoPeso = 'Está com obesidade de grau 2';
        }
        else {
            classificacaoPeso = 'Está com obesidade de grau 3, cuidado!';
        }

        resultado.textContent = `${nome}, o seu imc é ${valorImc} e você ${classificacaoPeso}`;

    }
    else {
        resultado.textContent = 'Preencha todos os campos!';
    }


}


calcular.addEventListener("click", calcularIMC);









