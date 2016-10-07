/**
 * Wrap component with provider
 * @function withProvider
 */
'use strict'

const { wrap } = require('breact')
const React = require('react')
const { Provider } = require('react-redux')

/** @lends withProvider */
function withProvider (Component, store) {
  return wrap(Component, {
    // --------------------
    // Specs
    // --------------------
    render () {
      const s = this
      let { props } = s
      return React.createElement(Provider, { store },
        React.createElement(Component, props)
      )
    }
  })
}

module.exports = withProvider
