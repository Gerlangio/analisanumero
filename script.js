//Essas são variáveis GLOBAIS
let num = window.document.querySelector('input#fnum');
let lista = window.document.querySelector('select#flista');
let res = window.document.querySelector('div#res');
let valores = []; //O vetor é uma lista

function isNumero(n) {

}

function inLista(n, l) {

}

function adicionar() {
    //Para adicionar verifica se é número e verifica se já está na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {

    } else {
        window.alert('Valor inválido ou encontrado na lista');
    }
}