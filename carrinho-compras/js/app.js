const valorCelular = 1400;
const valorFoneDeOuvido = 100;
const valorOculus = 5000;
function adicionar() {
  let inputSelecionado = document.getElementById("produto").value;
  let quantidadeItensInput = Number(
    document.getElementById("quantidade").value
  );
  if (quantidadeItensInput > 0 && !isNaN(quantidadeItensInput)) {
    if (inputSelecionado == "Fone de ouvido - R$100") {
      operacaoCarrinho(
        quantidadeItensInput,
        "Fone de ouvido",
        "foneDeOuvidoId",
        valorFoneDeOuvido,
        "idQuantidadeFone",
        "idValorFone"
      );
    } else if (inputSelecionado == "Celular - R$1400") {
      operacaoCarrinho(
        quantidadeItensInput,
        "Celular",
        "celularId",
        valorCelular,
        "idQuantidadeCelular",
        "idValorCelular"
      );
    } else if (inputSelecionado == "Oculus VR - R$5000") {
      operacaoCarrinho(
        quantidadeItensInput,
        "Oculus VR",
        "oculusId",
        valorOculus,
        "idQuantidadeOculus",
        "idValorOculus"
      );
    }
    //variaveis precisam estar fora do if para serem armazenadas e os ifs significam: esse id existe? se nao existir, valor é zero e não null
    let valorA = 0;
    let valorB = 0;
    let valorC = 0;
    if (document.getElementById("idValorFone") == null) {
      valorA = 0;
    } else {
      valorA = Number(document.getElementById("idValorFone").innerHTML);
    }
    if (document.getElementById("idValorCelular") == null) {
      valorB = 0;
    } else {
      valorB = Number(document.getElementById("idValorCelular").innerHTML);
    }
    if (document.getElementById("idValorOculus") == null) {
      valorC = 0;
    } else {
      valorC = Number(document.getElementById("idValorOculus").innerHTML);
    }

    let valorTotalMostrado = valorA + valorB + valorC;
    document.getElementById("valor-total").innerHTML = valorTotalMostrado;
  } else {
    alert("quantidade inválida");
  }
}

function operacaoCarrinho(
  quantidadeItensInput,
  produto,
  idProduto,
  valorProduto,
  idQuantidade,
  idvValor
) {
  if (document.getElementById(idProduto)) {
    //recupera a quantidade que já existia dentro do html que foi criada com else
    const numeroQuantidadeItemCarrinho = Number(
      document.getElementById(idQuantidade).innerHTML
    );
    //faz operação que modifica o valor da quantidade de itens no carrinho
    const totalCaixaFinalItemCarrinho =
      numeroQuantidadeItemCarrinho + quantidadeItensInput;
    document.getElementById(idQuantidade).innerHTML =
      totalCaixaFinalItemCarrinho;
    //faz operação que muda o valor instituído pelo else no html na primeira operacao
    const totalCaixaFinalValor = valorProduto * totalCaixaFinalItemCarrinho;
    document.getElementById(idvValor).innerHTML = totalCaixaFinalValor;
  } else {
    adicionarItemCarrinho(
      quantidadeItensInput,
      produto,
      idProduto,
      valorProduto * quantidadeItensInput,
      idQuantidade,
      idvValor
    );
  }
}
function limpar() {
  let produtoNoCarrinho = document.getElementById("lista-produtos");
  produtoNoCarrinho.innerHTML = "";
  let valorTotal = document.getElementById("valor-total");
  valorTotal.innerHTML = "0";
}

//funcao para criar linhas no html segundo o padrao de formatacao do CSS
function adicionarItemCarrinho(
  quantidadeItens,
  produto,
  idProduto,
  valor,
  idQuantidadeItem,
  idValorItem
) {
  let produtosNoCarrinho = document.getElementById("lista-produtos");
  let novoItem = document.createElement("section");
  //coloca uma classe à secao
  novoItem.classList.add("carrinho__produtos__produto");
  novoItem.innerHTML = `<span class="texto-azul" id= ${idQuantidadeItem}> ${quantidadeItens} </span> <span class="texto-azul"> x </span> <span id=${idProduto}> ${produto} </span><span class="texto-azul">R$ </span> <span class="texto-azul" id=${idValorItem}> ${valor}</span>`;
  //coloca a section no final da secao que possui como id "lista-produtos"
  produtosNoCarrinho.appendChild(novoItem);
}

//será que eu realmente preciso desse array?
