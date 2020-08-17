import getDateString from '@src/index'

describe('index', () => {
  describe('simple cases', () => {
    it.each`
      date                      | expected
      ${new Date('2020/08/17')} | ${'2020-08-17'}
      ${new Date('2020/12/31')} | ${'2020-12-31'}
      ${new Date('2021/01/01')} | ${'2021-01-01'}
      ${new Date('2024/02/29')} | ${'2024-02-29'}
    `("should return string '$expected' for date $date", ({ date, expected }) => {
      const result = getDateString(date)
      expect(result).toBe(expected)
    })
  })
})
