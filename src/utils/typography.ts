import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import BootstrapTheme from 'typography-theme-github'

BootstrapTheme.plugins = [
  new CodePlugin(),
]

BootstrapTheme.overrideThemeStyles = () => ({
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
  BootstrapTheme,
)

export default typography
