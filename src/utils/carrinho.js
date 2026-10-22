// O carrinho guarda uma entrada por unidade adicionada.
// Ex.: duas camisetas iguais = o mesmo produto duas vezes no array.

import { precoValido } from './formatarPreco.js'

export const LIMITE_FRETE_GRATIS = 200

export function calcularTotal(carrinho) {
  return carrinho.reduce((total, produto) => {
    if (!precoValido(produto?.price)) {
      return total
    }

    return total + Number(produto.price)
  }, 0)
}

export function calcularValorRestanteParaFreteGratis(valorFinal) {
  const valor = Number(valorFinal ?? 0)

  if (!Number.isFinite(valor)) {
    return 0
  }

  return Number(Math.max(LIMITE_FRETE_GRATIS - valor, 0).toFixed(2))
}

export function agruparItens(carrinho) {
  const itens = []
  carrinho.forEach((produto) => {
    const existente = itens.find((item) => item.produto.id === produto.id)
    if (existente) {
      existente.quantidade += 1
    } else {
      itens.push({ produto, quantidade: 1 })
    }
  })
  return itens
}
