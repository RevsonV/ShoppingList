var listaCompras = [];

function inserir() {
    
    var produto = document.getElementById('entrada').value;
    var listaUL = document.getElementById('lista');
    
    if (produto != '') {
        let cxTexto = '<input type="checkbox" id="' + produto + '" onclick="riscar(' + produto + ', label' + produto + ')">';
        let rotulo = '<label for="' + produto + '" id="label' + produto + '">' + produto + '</label>';
        
        listaCompras.push(produto);
        listaUL.innerHTML += '<li>' + cxTexto + rotulo + '</li>';

        document.getElementById('entrada').value = '';
    } else {
        alert('Digite o seu produto!');
    }
}

function remover() {
    listaCompras.forEach(element => {
        if(document.getElementById(element).checked){
            delete listaCompras[listaCompras.indexOf(element)];
        }
    })

    listar();
}

function limpar() {
    var listaUL = document.getElementById('lista');

    listaCompras.splice(0,listaCompras.length);
    listaUL.innerHTML = "";
}

function listar() {
    var listaUL = document.getElementById('lista');

    if (listaCompras != '') {
        listaUL.innerHTML = '';

        listaCompras.forEach(element => {
            let formulario = '<input type="checkbox" id="' + element + '" onclick="riscar(' + element + ', label' + element + ')">';
            let rotulo = '<label for="' + element + '" id="label' + element + '">' + element + '</label>'; 
            
            listaUL.innerHTML += '<li>' + formulario + rotulo + '</li>';
        });
    } else {
        alert("Sua lista está vazia!");
    }
}

function riscar(caixa, rotulo) {
    if (caixa.checked) {
        rotulo.setAttribute('class', 'riscado');
    } else {
        rotulo.setAttribute('class', '');
    }
}