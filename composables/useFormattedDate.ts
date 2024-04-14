import dayjs from 'dayjs'

export default (date: number) => {
  return dayjs(date).format('DD MMM YYYY')
}
