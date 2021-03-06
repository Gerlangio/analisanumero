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
        //window.alert('Tudo Ok!');
        valores.push(Number(num.value));//esse comando adiciona o valor no vetor
        let item = window.document.createElement('option');//element criado dinamicamente tag
        item.text = `Valor ${num.value} adicionado!`;//item recebe Number e armazena String
        lista.appendChild(item);//e por fim é adicionado o item na lista/vetor
        res.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        //Verifica o total de números armazenados no vetor vetor/lista
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) {
                maior = valores[pos];
                if (valores[pos] < menor)
                menor = valores[pos];
            }
        }
        media = soma / tot;
        res.innerHTML = '';//inicia a variável vazia
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>A soma de todos os valores temos, ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}