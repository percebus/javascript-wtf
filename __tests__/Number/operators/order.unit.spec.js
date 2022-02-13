describe('Number', () => {
  describe('left associativity', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU&t=383s
    describe('1 < 2 < 3', () => {
      it('is true', () => {
        expect(1 < 2 < 3).toBe(true)
      })
    })

    describe('3 > 2 > 1', () => {
      it('is false!', () => {
        expect(3 > 2 > 1).toBe(false)
      })
    })
  })
})
