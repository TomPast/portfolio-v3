import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnvVars = loadEnv(mode, process.cwd())
  const processEnvVars = Object.entries(viteEnvVars).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        [`process.env.${key}`]: `"${val}"`,
      }
    },
    {}
  )
  return {
    plugins: [
      react(),
      svgr({
        include: '**/*.svg',
      }),
    ],
    define: processEnvVars,
  }
})
