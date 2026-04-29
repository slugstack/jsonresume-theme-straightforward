# jsonresume-theme-straightforward

A straightforward [jsonresume](https://github.com/jsonresume) theme. Uses [resumed](https://jsonresume.org/cli) as the cli runner.

Fork freely, make it your own.

## examples

- [as HTML (https://slugstack.github.io/jsonresume-theme-straightforward)](https://slugstack.github.io/jsonresume-theme-straightforward)
- [as PDF (docs/index.pdf)](docs/index.pdf)

## usage

```sh
npm install jsonresume-theme-straightforward

npx resumed export resume.pdf -t jsonresume-theme-straightforward
npx resumed render -o resume.html -t jsonresume-theme-straightforward
```

## building local

```sh
npm install
npm test

npm run export:html
```

`npm install` is required before running any exports or tests. This theme installs itself as a local `file:.` dependency so that `resumed` can resolve it by package name.

Note that running `npm run export:pdf` will result in a different binary every time it's run, even if the source hasn't changed. So it's not the most reliable indicator of differences.
