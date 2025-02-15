import { ProgressProps } from './Progress.types'
import {
    circularStyle,
    circularInnerStyle,
    linearContainerStyle,
    linearStyle,
    linearInnerStyle,
} from '@strawberry-ui/styles/components/Progress'
import Text from '../Text'

const Progress = ({
    type = 'linear',
    variant = 'primary',
    value = 0,
    showLabel = false,
    fullWidth = false,
}: ProgressProps) => {
    const indeterminate = value === null

    const progressAngle = (indeterminate ? 50 : value) * 3.6

    switch (type) {
        case 'circular':
            return (
                <div
                    className={circularStyle({ variant, indeterminate })}
                    style={{ '--cirlce-gradient-degree': `${progressAngle}deg` } as React.CSSProperties}
                >
                    {showLabel && value !== null && (
                        <span className={circularInnerStyle()}>
                            <Text>{`${value}%`}</Text>
                        </span>
                    )}
                </div>
            )
        case 'linear':
            return (
                <div className={linearContainerStyle()}>
                    <div className={linearStyle({ fullWidth })}>
                        <span
                            className={linearInnerStyle({ variant, indeterminate, fullWidth })}
                            style={{ width: indeterminate ? '50%' : `${value}%` }}
                        />
                    </div>
                    {showLabel && value !== null && <Text>{`${value}%`}</Text>}
                </div>
            )
    }
}

export default Progress
