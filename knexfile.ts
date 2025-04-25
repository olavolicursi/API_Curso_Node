// import { Knex as KnexTypes } from 'knex' // Removed unused import
import { fileURLToPath } from 'node:url' // Import do Node.js
import path from 'node:path'
import 'dotenv/config'
import { env } from './src/env/index.js'
// eslint-disable-next-line @typescript-eslint/no-var-requires
import 'ts-node/register' // Registra o ts-node antes de importar o knexfile

// Substitui __dirname por:
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuração do Knex (igual à sua, mas com caminhos corrigidos)
const migrationsDir = path.resolve(__dirname, 'src', 'database', 'migrations')

/** @type {{ [key: string]: import('knex').Knex.Config }} */
const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, env.DATABASE_URL),
    },
    migrations: {
      extension: 'ts',
      directory: migrationsDir,
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:',
    },
    migrations: {
      extension: 'ts',
      directory: migrationsDir,
    },
    useNullAsDefault: true,
  },
}

export default config
