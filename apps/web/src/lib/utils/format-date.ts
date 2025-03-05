export const formatDate = (isoDateString: string): string => {
  return new Date(isoDateString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
  })
}
