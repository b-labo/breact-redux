/**
 * Test case for withProvider.
 * Runs with mocha.
 */
'use strict'

const withProvider = require('../lib/with_provider.js')
const React = require('react')
const assert = require('assert')
const co = require('co')

describe('with-provider', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('With provider', () => co(function * () {
    let div = React.createElement('div', { id: 123 })
    let provided = withProvider(div, { store: {} })
    assert.ok(provided)
  }))
})

/* global describe, before, after, it */
