/**
 * B bind for react redux
 * @module breact-redux
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get withProvider () { return d(require('./with_provider')) }
}
