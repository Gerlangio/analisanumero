//Essas são variáveis GLOBAIS
let num = window.document.querySelector('input#fnum');
let lista = window.document.querySelector('select#flista');
let res = window.document.querySelector('div#res');
let valores = []; //O vetor é uma lista

function isNumero(n) {
    //se o número n for maior ou igual a 1 e menor ou igual a 100.
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    //se na lista 'l' o Number 'n' for diferente de -1 indica que o valor não foi encontrado
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    //Para adicionar verifica se é número e verifica se já está na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo Ok!');
    } else {
        window.alert('Valor inválido ou encontrado na lista');
    }
}