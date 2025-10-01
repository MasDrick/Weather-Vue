export const getDayOfWeek = (date: Date): string => {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  return days[date.getDay()]!
}

export const getMonthName = (date: Date): string => {
  const months = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ]
  return months[date.getMonth()]!
}

export const formatTime = (unix?: number, tz?: number) => {
  if (!unix) return '--:--'
  const date = new Date((unix + (tz ?? 0)) * 1000)
  const hours = String(date.getUTCHours()).padStart(2, '0')
  const minutes = String(date.getUTCMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}
