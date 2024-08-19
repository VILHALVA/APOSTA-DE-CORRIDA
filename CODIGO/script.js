console.log("bolinho");
let myInterval;
let carro1 = 10;
let carro2 = 10;
let carro3 = 10;
let carro4 = 10;
let carro5 = 10;
let linhaChegadaAlcancada = false;
let vencedorDefinido = false;
let saldoInicial = 100;
let valorAposta = 0;
let carroEscolhido = 0;
let apostaRealizada = false;

function velocidade() {
  if (linhaChegadaAlcancada || vencedorDefinido) {
    clearInterval(myInterval);
    const vencedor = determinarVencedor();
    if (vencedor === carroEscolhido) {
      saldoInicial += valorAposta * 2; 
      alert(`Parabéns, você ganhou! O Vencedor foi o ${vencedor}.`);
    } 
    else {
      alert(`Você perdeu. Tente novamente. O Vencedor foi o ${vencedor}.`);
    }
    document.getElementById("saldo").innerText = saldoInicial; 
    reiniciarCorrida();
    return;
  }

  carro1 += Math.ceil(Math.random() * 10);
  const carro1Element = document.getElementById("carro1");
  carro1Element.style.left = carro1 + "px";

  carro2 += Math.ceil(Math.random() * 10);
  const carro2Element = document.getElementById("carro2");
  carro2Element.style.left = carro2 + "px";

  carro3 += Math.ceil(Math.random() * 10);
  const carro3Element = document.getElementById("carro3");
  carro3Element.style.left = carro3 + "px";

  carro4 += Math.ceil(Math.random() * 10);
  const carro4Element = document.getElementById("carro4");
  carro4Element.style.left = carro4 + "px";

  carro5 += Math.ceil(Math.random() * 10);
  const carro5Element = document.getElementById("carro5");
  carro5Element.style.left = carro5 + "px";

  if (carro1 >= 1800 || carro2 >= 1800 || carro3 >= 1800 || carro4 >= 1800 || carro5 >= 1800) {
    linhaChegadaAlcancada = true;
  }

}

function determinarVencedor() {
  let vencedor = 0;
  if (carro1 >= 1800) {
    vencedor = 1;
  } 
  else if (carro2 >= 1800) {
    vencedor = 2;
  } 
  else if (carro3 >= 1800) {
    vencedor = 3;
  } 
  else if (carro4 >= 1800) {
    vencedor = 4;
  } 
  else if (carro5 >= 1800) {
    vencedor = 5;
  }
  vencedorDefinido = true;
  return vencedor;
}

function realizarAposta() {
  valorAposta = parseInt(document.getElementById("valorAposta").value);
  
  if (!valorAposta || valorAposta <= 4) {
    alert("Por favor, o valor minimo para a aposta é 5 Reais.");
    return;
  }

  if (carroEscolhido === 0) {
    alert("Escolha um carro para apostar.");
    return;
  }

  if (valorAposta > saldoInicial) {
    alert("Saldo insuficiente para realizar a aposta.");
    return;
  }
  
  saldoInicial -= valorAposta;
  document.getElementById("saldo").innerText = saldoInicial;
  
  if (!apostaRealizada) {
    apostaRealizada = true;
    myInterval = setInterval(velocidade, 50);
    
  }
}

function escolherCarro(numeroCarro) {
  carroEscolhido = numeroCarro;
  document.getElementById("resultado").innerText = `Aposta no Carro ${numeroCarro} selecionada.`;
}

function adicionarDinheiro() {
  const valorAdicionar = parseInt(document.getElementById("valorAdicionar").value);
  if (valorAdicionar > 0) {
    saldoInicial += valorAdicionar;
    document.getElementById("saldo").innerText = saldoInicial;
  }
}

function reiniciarCorrida() {
  carro1 = 10;
  carro2 = 10;
  carro3 = 10;
  carro4 = 10;
  carro5 = 10;
  linhaChegadaAlcancada = false;
  vencedorDefinido = false;
  apostaRealizada = false;
  document.getElementById("valorAposta").value = "";
  document.getElementById("resultado").innerText = "";
}




