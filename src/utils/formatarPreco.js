export function precoValido(valor) {
  const numero = Number(valor)
  return Number.isFinite(numero) && numero > 0
}

export function formatarPreco(valor) {
  if (!precoValido(valor)) {
    return 'Preço indisponível'
  }

  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
