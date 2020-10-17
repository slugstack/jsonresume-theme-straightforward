const fs = require("fs");
const path = require('path')
const Handlebars = require("handlebars");

const extname = '.hbs'
const partialsDir = path.join(__dirname, 'partials')

fs.readdirSync(partialsDir)
  .filter(filename => path.extname(filename) === extname)
  .map(filename => [
    filename,
    fs.readFileSync(path.join(partialsDir, filename), 'utf8'),
  ])
  .forEach(([filename, template]) =>
    Handlebars.registerPartial(path.basename(filename, extname), template),
  )

Handlebars.registerHelper('MONTH_YEAR', dateString =>
  // https://dockyard.com/blog/2020/02/14/you-probably-don-t-need-moment-js-anymore
  new Date(dateString).toLocaleDateString('en', {
    month: 'long',
    year: 'numeric',
  })
);

Handlebars.registerHelper('IF_DATES_HAVE_SAME_MONTH_AND_YEAR', function (arg1, arg2) {
  // prevents situation where we render same month/date combination
  // such as "Sept. 2020 - Sept. 2020"
  const matchingYear = new Date(arg1).getFullYear() == new Date(arg2).getFullYear()
  const matchingMonth = new Date(arg1).getMonth() == new Date(arg2).getMonth()
  return (matchingYear && matchingMonth)
});

Handlebars.registerHelper('join', (arr, separator) =>
  arr.join(typeof separator === 'string' ? separator : ', '),
)

exports.render = resume => {
  const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8')
  const template = fs.readFileSync(path.join(__dirname, 'resume.hbs'), 'utf-8')

  return Handlebars.compile(template)({ css, resume })
}
