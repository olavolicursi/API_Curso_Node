import { beforeAll } from 'vitest'
import { connection } from '../src/database.js'
import { execSync } from 'node:child_process'

beforeAll(async () => {
  execSync('npx knex migrate:latest --env test', {
    stdio: 'inherit',
  })
  await connection.migrate.latest()
})
