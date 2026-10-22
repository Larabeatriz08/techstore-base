import test from 'node:test'
import assert from 'node:assert/strict'

import { calcularTotal } from './carrinho.js'

test('calcularTotal soma preços em string e número corretamente', () => {
  const carrinho = [{ price: '89' }, { price: '45' }]

  assert.equal(calcularTotal(carrinho), 134)
})

test('calcularTotal ignora itens sem preço definido', () => {
  const carrinho = [{ price: '89' }, { price: undefined }, { price: 45 }]

  assert.equal(calcularTotal(carrinho), 134)
})
