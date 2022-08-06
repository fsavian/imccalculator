function calcularIMC() {
    const form = document.querySelector(`.form`);
    const resultadoOk = document.querySelector(`.resultado-ok`);
    // const resultadoNaoOk = document.querySelector(`.resultado-nao-ok`);

    function recebeEventoForm(evento) {
        evento.preventDefault();

        let peso = form.querySelector('#peso');
        let altura = form.querySelector('#altura');

        let pesoNumero = Number(peso.value);
        let alturaNumero = Number(altura.value);

        let imc = pesoNumero / (alturaNumero * alturaNumero);
        
        let imcArredondado = parseFloat(imc.toFixed(2));

        console.log(imcArredondado);
        
        if (imc >=1 && imc < 18.5) {
            resultadoOk.innerHTML = `<p>Seu IMC é ${imcArredondado} (Abaixo do peso)</p>`;
        } else if (imc >= 18.5 && imc < 25) {
            resultadoOk.innerHTML = `<p>Seu IMC é ${imcArredondado} (Peso normal)</p>`;
        } else if (imc >= 25 && imc < 30) {
            resultadoOk.innerHTML = `<p>Seu IMC é ${imcArredondado} (Sobrepeso)</p>`;
        } else if (imc >= 30 && imc < 35) {
            resultadoOk.innerHTML =`<p>Seu IMC é ${imcArredondado} (Obesidade grau 1)</p>`;
        } else if (imc >= 35 && imc < 40) {
            resultadoOk.innerHTML = `<p>Seu IMC é ${imcArredondado} (Obesidade grau 2)</p>`;
        } else if (imc >= 40 && imc <600) {
            resultadoOk.innerHTML = `<p>Seu IMC é ${imcArredondado} (Obesidade grau 3)</p>`;
        } else if (imc === 0) {
            resultadoOk.innerHTML = `<p>Digite seu peso corretamente!</p>`;
        } else if (imc ===Infinity) {
            resultadoOk.innerHTML =`<p>Digite sua altura corretamente!</p>`;
        }
    }

    form.addEventListener('submit', recebeEventoForm);
    
    peso.addEventListener('change', function handleChangePeso(peso) {
        if (peso.target.value > 0) {
            resultadoOk.style.display = 'block';
        } else {
            resultadoOk.style.display = alert('Digite seu peso corretamente!');
        }
    });

    altura.addEventListener('change', function handleChangePeso(altura) {
        if (altura.target.value > 0) {
            resultadoOk.style.display = 'block';
        } else {
            resultadoOk.style.display = alert('Digite sua altura corretamente!');
        }
    });

}
calcularIMC();