function criarProduto(tipo, nome, preco) {
    if (tipo === "eletronico") {
        return {tipo, nome, preco, garantiaMeses: 12}
    } else if (tipo === "vestuario") {
        return {tipo, nome, preco, tamanho: "M"}
    } else {
        return {tipo: "geral", nome, preco}
    }
}

MediaSourceHandle.exports = {criarProduto}