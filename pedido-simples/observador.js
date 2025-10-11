// OBSERVER

class Observador {
    constructor() {
        this.inscritos = []
    }

    inscrever(funcao) {
        this.inscritos.push(funcao)
    }

    notificar(dado) {
        this.inscritos.forEach(funcao => funcao(dado))
    }
}

module.exports = new Observador()