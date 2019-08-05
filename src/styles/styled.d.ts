import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      code: string,
    }
    color: {
      bg: string
      altBg: string
      altFg: string,
    }
    colorIntroverted: {
      bg: string
      fg: string
      altBg: string
      altFg: string,
    }
  }
}
