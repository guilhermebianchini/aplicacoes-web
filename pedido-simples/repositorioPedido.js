class RepositorioPedido {
    constructor() {
        this.pedidos = []
    }

    salvar (pedido) {
        this.pedidos.push(pedido)
    }

    listar () {
        return this.pedidos
    }
}

module.exports = new RepositorioPedido()