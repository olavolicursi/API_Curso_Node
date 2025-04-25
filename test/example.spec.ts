import { it, beforeAll, describe, beforeEach, expect } from 'vitest'
import { app } from '../src/app.js'
import { connection } from '../src/database.js'

describe('POST /transactions', () => {
  beforeAll(async () => {
    await connection.migrate.latest()
  })

  beforeEach(async () => {
    await connection('transactions').truncate()
  })

  it('deve criar uma nova transação', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/transactions',
      payload: {
        title: 'Compra',
        amount: 100,
        type: 'credit', // exemplo: credit/debit
      },
    })

    expect(response.statusCode).toBe(201)

    const body = JSON.parse(response.body)
    expect(body).toMatchObject({
      title: 'Compra',
      amount: 100,
      type: 'credit',
    })
  })
})
