export function initialLettersIntoCapitalLetters(text: string): string {
  const textArr = text.split(' ')
  return textArr
    .map((item) => {
      return item[0].toUpperCase() + item.substring(1).toLocaleLowerCase()
    })
    .join(' ')
}
