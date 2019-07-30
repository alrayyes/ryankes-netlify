interface DefaultTheme {
  font: {
    code: string
    heading: string
    text: string,
  }
  color: {
    bg: string
    fg: string
    altBg: string
    altFg: string
    link: string,
  }
  colorIntroverted: {
    bg: string
    fg: string
    altBg: string
    altFg: string
    link: string,
  }
}

export const Theme: DefaultTheme = {
  color: {
    altBg: `#E0E0E0`,
    altFg: `#000`,
    bg: `#FAFAFA`,
    fg: `#212121`,
    link: `#1565c0`,
  },
  colorIntroverted: {
    altBg: `#424242`,
    altFg: `#fafafa`,
    bg: `#212121`,
    fg: `#fafafa`,
    link: `#f44336`,
  },
  font: {
    code: `Source Code Pro', 'Lucida Console', monospace`,
    heading: `Lato, Helvetica, sans-serif`,
    text: `Merriweather, Georgia, serif`,
  },
}
