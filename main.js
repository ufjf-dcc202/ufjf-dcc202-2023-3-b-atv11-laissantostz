// main.js

import { getLista, limpaLista, adicionaNaLista, removeDaLista } from "./lista.js";

const olItens = document.querySelector('#itens');
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

btnAdicionar.addEventListener('click', adicionaItemNaLista);
btnLimpar.addEventListener('click', limparItensDeLista);

function adicionaItemNaLista() {
  const item = pEntrada.textContent.trim();
  if (item) {
    adicionaNaLista(item);
    pEntrada.textContent = '';
    atualizarLista(); 
  }
}

function limparItensDeLista() {
  limpaLista();
  atualizarLista();
}

function atualizarLista() {
  olItens.innerHTML = "";
  let lista = getLista(); 
  for (let i = 0; i < lista.length; i++) {
    const li = document.createElement('li');
    li.textContent = lista[i];

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.onclick = function() { removerItemDaLista(i); } ;

    li.appendChild(btnRemover);
    olItens.appendChild(li);
  }
}
function removerItemDaLista(index) {
  removeDaLista(index);
  atualizarLista();
}


atualizarLista();