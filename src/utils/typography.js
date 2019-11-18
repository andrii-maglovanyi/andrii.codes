import Typography from "typography"
import theme from "typography-theme-wordpress-2012"

const typography = new Typography(theme)

// Insert styles directly into the <head>
typography.injectStyles()

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
