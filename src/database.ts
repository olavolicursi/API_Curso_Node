// Corrigindo a importação do knex (usando default import)
import knex from 'knex'
import config from '../knexfile.js' // Corrigido para .js

const environment = (process.env.NODE_ENV ||
  'development') as keyof typeof config
console.log('NODE_ENV:', environment)
console.log('Configurações disponíveis:', Object.keys(config))

// Criando a conexão Knex
export const connection = knex(config[environment])
