import { useState } from 'react'
import './App.css'
import { Button, useTheme } from '@strawberry-ui/react'

function App() {
	const [count, setCount] = useState<number>(0)

	const increment = () => {
		setCount(count => count + 1)
	}

	const { theme, setTheme } = useTheme()

	const switchTheme = () => {
		setTheme(theme == 'light' ? 'dark' : 'light')
	}

	return (
		<div className='container'>
			<Button onClick={increment}>Count is {count}</Button>
			<Button variant='outline' tone='neutral' onClick={switchTheme}>
				Mudar tema
			</Button>
		</div>
	)
}

export default App
