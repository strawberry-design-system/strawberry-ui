import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import path from 'path'

export default defineConfig({
	plugins: [react(), svgr(), vanillaExtractPlugin()],
	resolve: {
		alias: {
			'@strawberry-ui/icons': path.resolve(__dirname, '../icons/src'),
			'@strawberry-ui/react': path.resolve(__dirname, '../react/src'),
			'@strawberry-ui/styles': path.resolve(__dirname, '../styles/src'),
			'@strawberry-ui/tokens': path.resolve(__dirname, '../tokens/src')
		}
	}
})
