# jsonresume-theme-straightforward

A straightforward [jsonresume](https://github.com/jsonresume) theme. 

Fork freely, make it your own.

## examples

- [as HTML (https://slugstack.github.io/jsonresume-theme-straightforward)](https://slugstack.github.io/jsonresume-theme-straightforward)
- [as PDF (docs/index.pdf)](docs/index.pdf)

## usage

```sh
npm install jsonresume-theme-straightforward

resume export resume.pdf --format pdf --theme jsonresume-theme-straightforward
resume export resume.html --format html --theme jsonresume-theme-straightforward
```

## building local

```sh
npm install
npm start
npm test

npm run export:html
```

Note that running `npm run export:pdf` will result in a different binary every time it's run, even if the source hasn't changed. So it's not the most reliable indicator of differences.
