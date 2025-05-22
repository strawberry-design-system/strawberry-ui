import { useEffect, useState } from 'react'
import { IconProps } from './Icon.types'
import { iconStyle } from '@strawberry-ui/styles/components/Icon'
import { Spinner } from '../Spinner'
import { IconName, icons } from '@strawberry-ui/icons'

export function Icon({ name = 'placeholder', className }: IconProps & { name?: IconName }) {
	const [IconComponent, setIconComponent] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		icons[name]()
			.then(mod => {
				setIconComponent(() => mod.ReactComponent)
			})
			.finally(() => setLoading(false))
	}, [name])

	const combinedClassName = `${iconStyle()} ${className || ''}`.trim()

	return (
		<>
			{loading && !IconComponent ? (
				<Spinner />
			) : IconComponent ? (
				<IconComponent className={combinedClassName} />
			) : null}
		</>
	)
}
