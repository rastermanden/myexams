export function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export function radiansToDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}

export function rightTriangleFromLegs(adjacent: number, opposite: number) {
  const hypotenuse = Math.sqrt(adjacent * adjacent + opposite * opposite);
  const angleRadians = Math.atan2(opposite, adjacent);
  const angleDegrees = radiansToDegrees(angleRadians);

  return {
    adjacent,
    opposite,
    hypotenuse,
    angleRadians,
    angleDegrees,
    sin: opposite / hypotenuse,
    cos: adjacent / hypotenuse,
    tan: opposite / adjacent,
  };
}

export function sideFromSine(angleDegrees: number, hypotenuse: number): number {
  return hypotenuse * Math.sin(degreesToRadians(angleDegrees));
}
