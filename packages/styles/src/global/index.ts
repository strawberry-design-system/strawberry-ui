import { globalCss } from "../stitches.config"

const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: 'sans-serif'
    },
    body: {
        backgroundColor: '$colorNeutralPrimaryBackground',
        color: '$colorNeutralPrimaryText'
    }
})
  
export default globalStyles