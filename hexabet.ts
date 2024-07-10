export function encode(content: string) {
  return content.replace(/[g-zG-Z]/g, (c) => {
    const code = c.toLowerCase();
    return HEXABET[code] !== undefined ? `${HEXABET[code]}` : c;
  });
}

const HEXABET: Record<string, number> = {
  g: 9,
  h: 4,
  i: 1,
  j: 9,
  l: 1,
  m: 4,
  n: 1,
  o: 0,
  p: 9,
  q: 9,
  r: 2,
  s: 5,
  t: 7,
  u: 0,
  v: 9,
  w: 9,
  x: 7,
  y: 9,
  z: 2,
};
