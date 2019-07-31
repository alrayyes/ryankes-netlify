interface DefaultTheme {
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

export const Theme: DefaultTheme = {
  color: {
    altBg: `#E0E0E0`,
    altFg: `#000`,
    bg: `#FAFAFA`,
  },
  colorIntroverted: {
    altBg: `#424242`,
    altFg: `#fafafa`,
    bg: `#212121`,
    fg: `#fafafa`,
  },
  font: {
    code: `Source Code Pro', 'Lucida Console', monospace`,
  },
}
