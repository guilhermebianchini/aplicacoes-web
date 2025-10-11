// PADRÃO SINGLETON

// GARANTE APENAS UMA INSTÂNCIA DE CONFIGURAÇÃO

class Configuracao {
    constructor() {
        if(Configuracao.instancia) {
            return Configuracao.instancia
        }

        this.moeda = "R$"
        this.percentualDescontoPadrao = 0.05
        Configuracao.instancia = this
    }

    alterarMoeda(novaMoeda) {
        this.moeda = novaMoeda
    }
}

module.exports = new Configuracao