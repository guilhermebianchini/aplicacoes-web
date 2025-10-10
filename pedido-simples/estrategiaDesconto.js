class EstrategiaDesconto {
    calcular(preco) {
        return preco
    }
}

class DescontoPadrao extends EstrategiaDesconto {
    constructor(config) {
        super()
        this.config = config
    }

    calcular(preco) {
        return preco * (1 - this.config.percentualDescontoPadrao)
    }
}

class DescontoFidelidade extends EstrategiaDesconto {
    calcular(preco) {
        return preco * 0.9 // 10% DE DESCONTO
    }
}

module.exports = {DescontoPadrao, DescontoFidelidade}