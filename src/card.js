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
        backgroundColor: '#0069ff',
        backgroundImage: 'linear-gradient(32deg, #66a5ff, #0069ff)'
      }
    },
    h('img', {
      src: 'https://icon.now.sh/history/ffffff',
      style: { width: widthIcon }
    })
  )
