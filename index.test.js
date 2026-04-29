const { HtmlValidate } = require('html-validate')

const Handlebars = require("handlebars");

const index = require('./index')
const resume = require('./resume.json')

describe('render function', () => {
  test('given valid parameter then return valid html', async () => {
    const validator = new HtmlValidate()
    const result = await validator.validateString(index.render(resume))
    expect(result.valid).toBe(true)
  })
})

describe('Handlebars Tests', () => {

  describe('FORMAT_PHONE', () => {
    test('replaces spaces and hyphens with non-breaking equivalents', () => {
      const result = Handlebars.compile('{{{FORMAT_PHONE phone}}}')({ phone: '(912) 555-4321' })
      expect(result).toBe('(912)&nbsp;555&#8209;4321')
    })
  })

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
