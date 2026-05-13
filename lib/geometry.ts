export type PlaneShape = "rektangel" | "trekant" | "cirkel";
export type SolidShape = "kasse" | "cylinder" | "kegle" | "kugle" | "pyramide";

export function rectangleArea(width: number, height: number): number {
  return width * height;
}

export function triangleArea(base: number, height: number): number {
  return 0.5 * base * height;
}

export function circleArea(radius: number): number {
  return Math.PI * radius * radius;
}

export function boxVolume(length: number, width: number, height: number): number {
  return length * width * height;
}

export function boxSurfaceArea(length: number, width: number, height: number): number {
  return 2 * (length * width + length * height + width * height);
}

export function cylinderVolume(radius: number, height: number): number {
  return Math.PI * radius * radius * height;
}

export function cylinderSurfaceArea(radius: number, height: number): number {
  return 2 * Math.PI * radius * (radius + height);
}

export function coneVolume(radius: number, height: number): number {
  return (Math.PI * radius * radius * height) / 3;
}

export function coneSurfaceArea(radius: number, height: number): number {
  const slantHeight = Math.sqrt(radius * radius + height * height);
  return Math.PI * radius * (radius + slantHeight);
}

export function sphereVolume(radius: number): number {
  return (4 / 3) * Math.PI * radius * radius * radius;
}

export function sphereSurfaceArea(radius: number): number {
  return 4 * Math.PI * radius * radius;
}

export function squarePyramidVolume(baseSide: number, height: number): number {
  return (baseSide * baseSide * height) / 3;
}

export function squarePyramidSurfaceArea(baseSide: number, height: number): number {
  const slantHeight = Math.sqrt((baseSide / 2) * (baseSide / 2) + height * height);
  return baseSide * baseSide + 2 * baseSide * slantHeight;
}

export function pythagorasHypotenuse(a: number, b: number): number {
  return Math.sqrt(a * a + b * b);
}

export function pythagorasLeg(hypotenuse: number, knownLeg: number): number {
  if (knownLeg >= hypotenuse) {
    throw new RangeError("knownLeg must be smaller than hypotenuse");
  }
  return Math.sqrt(hypotenuse * hypotenuse - knownLeg * knownLeg);
}

export type Vector3 = { x: number; y: number; z: number };

export function vectorLength(v: Vector3): number {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}

export function vectorDot(a: Vector3, b: Vector3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

export function vectorSum(a: Vector3, b: Vector3): Vector3 {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}
