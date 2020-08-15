import moment from 'moment'

/**
 * Get a string representation of a date, with the YYYY-MM-DD format
 * @param date - The date for which to get a string representation
 */
export default function getDateString(date: Date): string {
  return moment(date.getTime()).format(moment.HTML5_FMT.DATE)
}
