# react-stockcharts
> **Note:** this repo is a fork of [react-financial-charts](https://github.com/react-financial/react-financial-charts)
> **Note:** which is a fork of [react-stockcharts](https://github.com/rrag/react-stockcharts)

Charts dedicated to finance.

The aim with this project is create financial charts that work out of the box.

## Features

- integrates multiple chart types
- technical indicators and overlays
- drawing objects

### Chart types

- Scatter
- Area
- Line
- Candlestick
- OHLC
- HeikenAshi
- Renko
- Kagi
- Point & Figure

### Indicators

- EMA, SMA, WMA, TMA
- Bollinger band
- SAR
- MACD
- RSI
- ATR
- Stochastic (fast, slow, full)
- ForceIndex
- ElderRay
- Elder Impulse

### Interactive Indicators

- Trendline
- Fibonacci Retracements
- Gann Fan
- Channel
- Linear regression channel

---

## Installation

```sh
npm install @pka420/react-stockcharts
```

## Documentation

[Docs]() #WIP

## Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md)

This project is NOT a mono-repo that uses [Lerna](https://lerna.js.org/) to manage dependencies between packages.
WE USE WEBPACK.

To get started run:

```bash
git clone https://github.com/pka420/react-stockcharts.git
cd react-stockcharts
npm install
npm run build
```

To start up a development server run:

```bash
npm run watch
```

## Roadmap

- [x] Convert to typescript
- [x] Bump dependencies to latest
- [x] Remove React 16 warnings
- [x] Add CI
- [x] Fix passive scrolling issues
- [x] Implement PRs from react-stockcharts
- [x] Add all typings
- [x] Move examples to storybook
- [x] Add all series' to storybook
- [x] Split project into multiple packages
- [x] Fix issues with empty datasets
- [x] Correct all class props
- [x] Migrate to new React Context API
- [x] Remove all UNSAFE methods
- [ ] Add documentation to docs
- [ ] Add full test suite

## LICENSE
WIP because I don't understand licences yet.
