function hexToHsl(hex: string) {
  // 1. Remove the '#' if present and normalize shorthand hex (e.g., "fff" -> "ffffff")
  let cleanHex = hex.replace(/^#/, '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(char => char + char).join('');
  }

  // 2. Parse the r, g, b values from the hex string
  const rInt = parseInt(cleanHex.substring(0, 2), 16);
  const gInt = parseInt(cleanHex.substring(2, 4), 16);
  const bInt = parseInt(cleanHex.substring(4, 6), 16);

  // 3. Make r, g, and b fractions of 1
  const r = rInt / 255;
  const g = gInt / 255;
  const b = bInt / 255;

  // 4. Find greatest and smallest channel values
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  
  let h = -1; 
  let s = -1;
  const l = (max + min) / 2;

  // 5. Calculate Hue and Saturation
  if (max === min) {
    h = s = 0; // Achromatic (gray)
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: 
        h = (g - b) / d + (g < b ? 6 : 0); 
        break;
      case g: 
        h = (b - r) / d + 2; 
        break;
      case b: 
        h = (r - g) / d + 4; 
        break;
    }
    
    h /= 6;
  }

  // 6. Format to standardized mathematical ranges
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

export default hexToHsl;