import { createGlobalStyle, css } from 'styled-components'

export const Container = css`
  margin: 0 auto;
  max-width: 90.0rem;
  width: 100%;
  padding-left: 2.0rem;
  padding-right: 2.0rem;
`

export const Wrapper = css`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;
`
export const Fab = css`
  height: 32px;
`

export const FloatRight = css`
  float: right;
`

export const GlobalStyle = createGlobalStyle`
*,
*:after,
*:before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
  background-color: ${(props) => props.theme.color.bg};
}

th, td {
  padding: 1.6rem;
}
table {
  border-collapse: collapse;
}
table td, table th {
  border: 2px solid ${(props) => props.theme.color.altFg};
}
table tr:first-child th {
  border-top: 0;
}
table tr:last-child td {
  border-bottom: 0;
}
table tr td:first-child,
table tr th:first-child {
  border-left: 0;
}
table tr td:last-child,
table tr th:last-child {
  border-right: 0;
}

p {
  margin: 2.0rem 0 2.0rem 0;
}

h1, h2, h3, h4, h5, h6 {
  margin: 6.4rem 0 .32rem 0;
}
`
