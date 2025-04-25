// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, // permite usar `describe`, `it`, `expect` sem importar
    environment: 'node', // ambiente adequado para backend (sem browser)
    setupFiles: ['./test/setup.ts'], // arquivos que rodam antes dos testes
    watch: false, // opcional: desativa o modo watch padrão
  },
})
