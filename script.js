//Essas são variáveis GLOBAIS
let num = window.document.querySelector('input#fnum');
let lista = window.document.querySelector('select#flista');
let res = window.document.querySelector('div#res');
let valores = [];

function adicionar() {
    //Para adicionar verifica se é número e se não já está na lista
    if (isNumero(num.value) && !inLista(num.value)) {

    } else {
        window.alert('Valor inválido ou encontrado na lista');
    }
}