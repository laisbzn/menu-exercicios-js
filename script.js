function executar(){
   
    let elementoNumeroUm = document.getElementById("numeroUm")
    let elementoNumeroDois = document.getElementById("numeroDois")
    let elementoNumeroTres = document.getElementById("numeroTres")

    let valorNumeroUm = Number(elementoNumeroUm.value)
    let valorNumeroDois = Number(elementoNumeroDois.value)
    let valorNumeroTres = Number(elementoNumeroTres.value)

    let resultadoSoma = valorNumeroUm + valorNumeroDois + valorNumeroTres

    let elementoResultado
    elementoResultado = document.getElementById("resultado") 
    elementoResultado.innerHTML = resultadoSoma
    // ou document.getElementById("resultado").innerHTML = resultadoSoma
    


    if(isNaN(resultadoSoma)){
        elementoResultado.innerHTML = "Invalido"
        elementoResultado.style.backgroundColor = "red"
    }else{
        elementoResultado.innerHTML = resultadoSoma
        elementoResultado.style.backgroundColor = "green" 
    }




}





function criarPessoa() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;

    const pessoa = {
        nome,
        sobrenome,
        concatenarNomes() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };

    document.getElementById('resultado').innerText = pessoa.concatenarNomes();
}












function calculaMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var media = (nota1 + nota2 + nota3) / 3;
    var resultadoDiv = document.getElementById('resultado');

    resultadoDiv.textContent = media >= 6 ? 'APROVADO' : 'REPROVADO';
    resultadoDiv.style.color = 'white';
    resultadoDiv.style.backgroundColor = media >= 6 ? 'green' : 'red';
}









function imprimePares() {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpar conteúdo anterior

    for (let i = 2; i <= 100; i += 2) {
        let parElement = document.createElement('p');
        parElement.textContent = i;
        resultadoDiv.appendChild(parElement);
    }
}






function menorNumero() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const menor = Math.min(num1, num2);
    document.getElementById('resultado').innerText = `O menor número é: ${menor}`;
}

function maiorNumero() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const maior = Math.max(num1, num2);
    document.getElementById('resultado').innerText = `O maior número é: ${maior}`;
}

