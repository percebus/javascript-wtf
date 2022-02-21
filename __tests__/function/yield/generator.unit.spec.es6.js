describe('function', () => {
  'use strict'

  describe('iterators', () => {
    describe('*createIterator(i)', () => {
      function * createIterator (i) {
        while (i++ <= 2) {
          yield i
        }
      }

      describe('iterator.next()', () => {
        it('yields 1, 2 & 3', () => {
          const iterator = createIterator(0)
          expect(iterator.next()).toEqual({ value: 1, done: false })
          expect(iterator.next()).toEqual({ value: 2, done: false })
          expect(iterator.next()).toEqual({ value: 3, done: false })
          expect(iterator.next()).toEqual({ value: undefined, done: true })
          expect(iterator.next()).toEqual({ value: undefined, done: true })
        })
      })

      describe('iterator.return(9000)', () => {
        it('skips to the end', () => {
          const iterator = createIterator(0)
          expect(iterator.next()).toEqual({ value: 1, done: false })
          expect(iterator.return(10)).toEqual({ value: 10, done: true })
          expect(iterator.next()).toEqual({ value: undefined, done: true })
          expect(iterator.next()).toEqual({ value: undefined, done: true })
          expect(iterator.return(9000)).toEqual({ value: 9000, done: true })
          expect(iterator.next()).toEqual({ value: undefined, done: true })
          expect(iterator.next()).toEqual({ value: undefined, done: true })
        })
      })
    })
  })
})
