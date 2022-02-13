describe('Number', () => {
  /* eslint-disable no-self-compare */
  /* eslint-disable no-compare-neg-zero */
  describe('-0', () => {
    it('is -0', () => {
      expect(-0).toBe(-0)

      expect(-0 === -0).toBe(true)
    })

    it('equals -0', () => {
      expect(-0).toEqual(-0)

      /* eslint-disable eqeqeq */
      expect(-0 == -0).toBe(true)
      /* eslint-enable eqeqeq */
    })

    it('does not equal 0', () => {
      expect(-0).not.toEqual(0) // o.0
    })
  })
  /* eslint-enable no-compare-neg-zero */
  /* eslint-enable no-self-compare */
})
