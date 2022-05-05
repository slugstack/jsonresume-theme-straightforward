const { HtmlValidate } = require('html-validate')

const index = require('../index')
const resume = require('../resume.json')

describe.skip('render function', () => {
  test('given no parameter then throw TypeError', () => {
    expect(() => index.render()).toThrowError(TypeError)
  })

  test('given invalid parameter then throw TypeError', () => {
    expect(() => index.render({})).toThrowError(TypeError)
  })

  test('given valid parameter then return valid html', () => {
    const validator = new HtmlValidate()
    expect(validator.validateString(index.render(resume)).valid).toBe(true)
  })
})
