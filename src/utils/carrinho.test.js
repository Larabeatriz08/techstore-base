import test from 'node:test'
import assert from 'node:assert/strict'

import { calcularTotal } from './carrinho.js'
import { formatarPreco, precoValido } from './formatarPreco.js'
import { validarCupom } from './cupons.js'

test('calcularTotal soma preços em string e número corretamente', () => {
    const carrinho = [{ price: '89' }, { price: '45' }]

    assert.equal(calcularTotal(carrinho), 134)
})

test('calcularTotal ignora itens sem preço definido', () => {
    const carrinho = [{ price: '89' }, { price: undefined }, { price: 45 }]

    assert.equal(calcularTotal(carrinho), 134)
})

test('formatarPreco retorna texto claro para valores inválidos', () => {
    assert.equal(precoValido(undefined), false)
    assert.equal(precoValido(Number.NaN), false)
    assert.equal(formatarPreco(undefined), 'Preço indisponível')
    assert.equal(formatarPreco(Number.NaN), 'Preço indisponível')
})

test('validarCupom aceita PRIMEIRACOMPRA apenas para clientes sem pedidos anteriores', () => {
    assert.deepEqual(validarCupom('PRIMEIRACOMPRA', { pedidosAnteriores: 0 }), {
        valido: true,
        desconto: 0.1,
    })

    assert.deepEqual(validarCupom('primeiracompra', { pedidosAnteriores: 2 }), {
        valido: false,
    })

    assert.deepEqual(validarCupom('PRIMEIRACOMPRA', null), {
        valido: false,
    })

    assert.deepEqual(validarCupom('PRIMEIRACOMPRA', { pedidosAnteriores: '0' }), {
        valido: true,
        desconto: 0.1,
    })
})
