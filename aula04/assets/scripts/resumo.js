const carregarEndereco = function () {
    let endereco = JSON.parse(
        sessionStorage.getItem('endereco')
    );
    
    if (endereco) {
        document.getElementById('rua').innerText = endereco.rua;
        document.getElementById('cidade').innerText = endereco.cidade;
        document.getElementById('estado').innerText = endereco.estado;
        document.getElementById('cep').innerText = endereco.cep;
    }
}

const carregarProdutos = function () {
    let produtos = JSON.parse(
        sessionStorage.getItem('produtos')
    );

    if (produtos) {

        document.getElementById('res_hav_quantidade').innerText = produtos.havaianas.quantidade;
        document.getElementById('res_hav_preco').innerText = produtos.havaianas.preco;

        document.getElementById('res_alp_quantidade').innerText = produtos.alpargatas.quantidade;
        document.getElementById('res_alp_preco').innerText = produtos.alpargatas.preco;
    }
}

carregarEndereco();
carregarProdutos();