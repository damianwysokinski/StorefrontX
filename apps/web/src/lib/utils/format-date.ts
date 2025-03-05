export const formatDate = (isoDateString: string): string => {
  const date = new Date(isoDateString)

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const month = months[date.getMonth()]
  const day = date.getDate()
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'

  hours = hours % 12
  hours = hours ? hours : 12

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return `${month} ${day} at ${hours}:${formattedMinutes} ${ampm}`
}
