
let botaoAdicionar = document.querySelector('.botao-adicionar');
let lista = document.querySelector('.ul');
let ultimoItem = lista.length;
let itens = lista.children;

console.log(lista)

botaoAdicionar.addEventListener('click', function() {
    var itemAdicionado = document.querySelector('.input-item').value;

    if(itemAdicionado.length <= 0) {
        alert("Digite o nome de um item!")
        console.log(itemAdicionado.length)

    } else {
        var novoItem = document.createElement('li')
        var botaoCancelar = document.createElement('button')
        novoItem.textContent = itemAdicionado
        botaoCancelar.textContent = 'X'
        novoItem.setAttribute('class', 'item')
        botaoCancelar.setAttribute('class', 'botao-cancelar')    
        novoItem.appendChild(botaoCancelar)
        lista.insertBefore(novoItem, itens[ultimoItem])
        botaoCancelar.addEventListener('click', function(){
            lista.removeChild(novoItem)
            ultimoItem -= 1
            
        });
        ultimoItem += 1
    }
})