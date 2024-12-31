let titulo = document.querySelector('h1');
titulo.innerHTML='Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 100';

let numeroLimite = 100;
let listaDeNumerosSorteados = [];
let  numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute==numeroSecreto){
        let palavratentativas = tentativas > 1 ? ' tentativas' : ' tentativa';
        
        exibirTextoNaTela('h1','Acertou !' );
        exibirTextoNaTela('p', 'Você descobriu o numero secreto com  '+ tentativas  +  palavratentativas);
        document.getElementById ('reiniciar').removeAttribute('disabled');
  

       
        
    } else {
        tentativas++;
        limparcampo();
        if (chute> numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor ');
        }else {
            exibirTextoNaTela('p', 'O numero secreto é maior ');
           
        }
    }
}

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female', {rate:1.2});
}
exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e ' + numeroLimite );

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random( )* numeroLimite + 1); // gerador de numeros 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    else  if (listaDeNumerosSorteados.includes(numeroEscolhido)){// verifica se o numero gerado ja tem na lista de numeros sorteados
        return gerarNumeroAleatorio(); //se ja tiver vai ser gerado um novo numero 
} else {
    listaDeNumerosSorteados.push(numeroEscolhido); //caso o numero não tenha na lista coloca ele na lista
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
    }

}


function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10 ');
}

function reiniciarJogo() {
    let numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 0;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disable', true);
}
 