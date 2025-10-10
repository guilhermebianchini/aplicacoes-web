const config = require("./configuracao")
const {criarProduto} = require("./fabricaProduto")
const {DescontoPadrao, DescontoFidelidade, DescontoPadrao} = require("./estrategiaDesconto")
const observador = require ("./observador")
const repositorio = require ("./repositorioPedido")
const ComandoCriarPedido = require("./comandoCriarPedido")

// OBSERVADORES

observador.inscrever(msg => console.log("LOG:", msg))
observador.inscrever(msg => console.log("Notificação:", msg))

// CRIANDO PRODUTO COM FACTORY

const produto1 = criarProduto("eletronico", "Fone de Ouvido", 200)
const produto2 = criarProduto("vestuario", "Camisa Polo", 100)

// APLICANDO ESTRATÉGIAS DE DESCONTO

const descontoPadrao = new DescontoPadrao(config)
const descontoFidelidade = new DescontoFidelidade()

produto1.precoFinal = descontoPadrao.calcular(produto1.preco)
produto2.precoFinal = descontoFidelidade.calcular(produto2.preco)

// CRIANDO PEDIDOS COM COMMAND

const pedido1 = {produto: produto1, cliente: "João"}
const pedido2 = {produto: produto2, cliente: "Maria"}

const comando1 = new ComandoCriarPedido(pedido1)
const comando2 = new ComandoCriarPedido(pedido2)

comando1.executar()
comando2.executar()

// MOSTRANDO REPOSITÓRIO DE PEDIDOS

console.log("\n Pedidos Salvos:")
console.table(repositorio.listar())