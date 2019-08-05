import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import GithubTheme from 'typography-theme-github'

GithubTheme.plugins = [
  new CodePlugin(),
]

GithubTheme.overrideThemeStyles = () => ({
  'a': {
    color: '#212121',
  },
  'a:hover, a:focus': {
    color: '#1565c0',
  },
  'label:hover, label:focus': {
    color: '#1565c0',
  },
})

const typography = new Typography(
  GithubTheme,
)

export default typography
