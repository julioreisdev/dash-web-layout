export function simpleLimitString(str: string, limite: number) {
  if (str.length <= limite) {
    return str;
  }

  const parteInicio = str.slice(0, limite);

  return `${parteInicio}...`;
}
