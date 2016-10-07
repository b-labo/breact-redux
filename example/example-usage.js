'use strict'

const { withProvider } = require('breact-redux')
const React = require('react')

{
  let div = React.createElement('div', { id: 123 })
  let provided = withProvider(div, { store: {} })
  /* ... */
}
