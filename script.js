
let botaoAdicionar = document.querySelector('.botao-adicionar');
let lista = document.querySelector('.ul');

let ultimoItem = lista.length;
let itens = lista.children;

document.addEventListener("keypress", function(event) {
         if (event.key === 'Enter') {
            event.preventDefault();
            botaoAdicionar.click();
        }
    });

botaoAdicionar.addEventListener('click', function() {
    var itemAdicionado = document.querySelector('.input-item').value;

    if(itemAdicionado.length <= 0) {
        alert("Digite o nome de um item!")

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
        document.querySelector('.input-item').value = ""
        document.querySelector('.input-item').focus()
        ultimoItem += 1
    }
})