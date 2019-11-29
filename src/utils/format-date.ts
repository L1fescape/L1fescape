const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US', dateOptions)
}
