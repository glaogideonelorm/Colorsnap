# colorsnap

A simple utility to generate random colors in hex, RGB, and HSL formats.

## Installation

```bash
npm install colorsnap
```

## Usage

```js
const { randomHex, randomRGB, randomHSL, hexToRGB, randomPalette } = require("random-color-utils");

// Generate a random hex color
console.log(randomHex()); // #a3f2c1

// Generate a random RGB color
console.log(randomRGB()); // { r: 120, g: 45, b: 200, string: 'rgb(120, 45, 200)' }

// Generate a random HSL color
console.log(randomHSL()); // { h: 240, s: 60, l: 50, string: 'hsl(240, 60%, 50%)' }

// Convert hex to RGB
console.log(hexToRGB("#ff5733")); // { r: 255, g: 87, b: 51, string: 'rgb(255, 87, 51)' }

// Generate a palette of 5 random colors
console.log(randomPalette()); // ['#a1b2c3', '#d4e5f6', ...]
console.log(randomPalette(3)); // ['#a1b2c3', '#d4e5f6', '#789abc']
```

## API

| Function | Description |
|---|---|
| `randomHex()` | Returns a random hex color string |
| `randomRGB()` | Returns an object with r, g, b values and a string |
| `randomHSL()` | Returns an object with h, s, l values and a string |
| `hexToRGB(hex)` | Converts a hex string to RGB |
| `randomPalette(count)` | Returns an array of random hex colors (default 5) |
