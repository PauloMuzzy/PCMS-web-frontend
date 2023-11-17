export function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase()
  })
}
