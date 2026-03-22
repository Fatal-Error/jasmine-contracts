import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'session-context/index': 'src/session-context/index.ts',
    'entitlements/index': 'src/entitlements/index.ts',
    'integrations/index': 'src/integrations/index.ts',
    'tenant/index': 'src/tenant/index.ts'
  },
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  target: 'es2022',
  splitting: false,
  outDir: 'dist'
})
