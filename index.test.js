const { HtmlValidate } = require('html-validate')

const Handlebars = require("handlebars");

const index = require('./index')
const resume = require('./resume.json')

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


describe('Handlebars Tests', () => {

  describe('date helpers', () => {

    test('MONTH_YEAR converts month as an integer into abbreviated English format', () => {
      this.fields = { date: "2013-12-01" };
      this.html = "{{MONTH_YEAR date}}";
      var template = Handlebars.compile(this.html);
      this.fields['date'] = "2013-12-01";
      var result = template(this.fields);
      expect(result).toEqual("Dec 2013");
    })

  })

})
