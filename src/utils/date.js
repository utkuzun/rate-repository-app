export const parseDate = (date) => {
  return date.split('T')[0].split('-').join('.')
}
