const { createElement: h } = require('react')

const width = 512
const widthIcon = 0.75 * width
const padding = 0.125 * width

module.exports = props =>
  h(
    'div',
    {
      style: {
        boxSizing: 'border-box',
        margin: 0,
        padding,
        width,
        height: width,
        backgroundColor: '#FF16D1',
        backgroundImage: 'linear-gradient(64deg, #FF16D1, #592DEA)'
      }
    },
    h('img', {
      src: 'https://icon.now.sh/cake/ffffff',
      style: { width: widthIcon }
    })
  )
