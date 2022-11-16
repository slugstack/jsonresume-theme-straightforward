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

    this.fields = {
      startDate: "2013-12-01",
      endDate: "2013-12-31",
    };

    test('MONTH_YEAR converts month as an integer into abbreviated English format', () => {
      this.html = "{{MONTH_YEAR startDate}}";
      var template = Handlebars.compile(this.html);
      this.fields['startDate'] = "2013-12-05";
      var result = template(this.fields);
      expect(result).toEqual("Dec 2013");
    })

    test('IF_DATES_HAVE_SAME_MONTH_AND_YEAR is true when dates have the same month and year', () => {
      this.html = "{{IF_DATES_HAVE_SAME_MONTH_AND_YEAR startDate endDate}}";
      var template = Handlebars.compile(this.html);
      this.fields['startDate'] = "2013-12-01";
      this.fields['endDate'] = "2013-12-31";
      var result = template(this.fields);
      expect(result).toEqual("true");
    })

    test('IF_DATES_HAVE_SAME_MONTH_AND_YEAR is false when dates have mismatching month', () => {
      this.html = "{{IF_DATES_HAVE_SAME_MONTH_AND_YEAR startDate endDate}}";
      var template = Handlebars.compile(this.html);
      this.fields['startDate'] = "2013-01-01";
      this.fields['endDate'] = "2013-12-01";
      var result = template(this.fields);
      expect(result).toEqual("false");
    })

  })

})
