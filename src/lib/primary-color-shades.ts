export const getShadesOfPrimaryColor = () => {
  /**
   * Note: @primaryColor & @numShades
   * should be passed as argument
   */
  // Define the primary color as an RGB value
  const primaryColor: [number, number, number] = [44, 44, 191]; // [60, 176, 67]
  // Define the number of shades to generate
  const numShades = 10;

  // Convert the RGB value to HSL
  const hslColor = rgbToHsl(...primaryColor);

  // Loop through the shades and generate a new color for each one
  console.log("-- Color Shades of RGB [44, 44, 191] -- \n");
  for (let i = 1; i <= numShades; i++) {
    // Calculate the lightness value for the current shade
    const lightness = (100 / numShades) * i;

    // Convert the HSL color to RGB with the new lightness value
    const rgbColor = hslToRgb(hslColor[0], hslColor[1], lightness);

    // Print the RGB value of the new color
    console.log(`Color shade ${i} is `, rgbColor);
  }
};

// Function to convert RGB to HSL
const rgbToHsl = (
  r: number,
  g: number,
  b: number
): [number, number, number] => {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h =
    s !== 0
      ? l === r
        ? (g - b) / s
        : l === g
        ? 2 + (b - r) / s
        : 4 + (r - g) / s
      : 0;

  return [
    60 * (h < 0 ? h + 6 : h),
    100 * (s ? s / (l < 0.5 ? 2 * l : 2 - 2 * l) : 0),
    100 * l,
  ];
};

// Function to convert HSL to RGB
const hslToRgb = (
  h: number,
  s: number,
  l: number
): [number, number, number] => {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  return [
    Math.abs(Math.round(255 * f(0))),
    Math.abs(Math.round(255 * f(8))),
    Math.abs(Math.round(255 * f(4))),
  ];
};
