import getDateString from '@src/index'

describe('index', () => {
  describe('simple cases', () => {
    it('should return the date as string', async () => {
      const result = getDateString(new Date('2020/04/18'))
      expect(result).toBe('2020-04-18')
    })
  })
})
