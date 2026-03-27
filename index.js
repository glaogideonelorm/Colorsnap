const randomHex = () => {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, "0")}`;
};

const randomRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b, string: `rgb(${r}, ${g}, ${b})` };
};

const randomHSL = () => {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 101);
  const l = Math.floor(Math.random() * 101);
  return { h, s, l, string: `hsl(${h}, ${s}%, ${l}%)` };
};

const hexToRGB = (hex) => {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return { r, g, b, string: `rgb(${r}, ${g}, ${b})` };
};

const randomPalette = (count = 5) => {
  return Array.from({ length: count }, () => randomHex());
};

module.exports = { randomHex, randomRGB, randomHSL, hexToRGB, randomPalette };
