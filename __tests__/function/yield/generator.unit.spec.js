describe('function', () => {
  'use strict'

  describe('generators', () => {
    describe('yield VS return', () => {
      function * createGenerator () {
        yield 1
        yield 2
        return -1
      }

      describe('for each item of genrator', () => {
        const generator = createGenerator()
        const items = []
        for (const item of generator) {
          items.push(item)
        }

        it('does NOT have 3 items', () => {
          expect(items.lenght).not.toBe(3)
        })

        it('actually has 2 items', () => {
          expect(items.length).toBe(2)
        })

        it('equals [1, 2], because it skipped the return', () => {
          expect(items).toEqual([1, 2]) // no 3
        })
      })
    })

    describe('*createGenerator(i)', () => {
      function * createGenerator (i) {
        while (i++ <= 2) {
          yield i
        }
      }

      describe('generator.next()', () => {
        it('yields 1, 2 & 3', () => {
          const generator = createGenerator(0)
          expect(generator.next()).toEqual({ value: 1, done: false })
          expect(generator.next()).toEqual({ value: 2, done: false })
          expect(generator.next()).toEqual({ value: 3, done: false })
          expect(generator.next()).toEqual({ value: undefined, done: true })
          expect(generator.next()).toEqual({ value: undefined, done: true })
        })
      })

      describe('generator.return(9000)', () => {
        it('skips to the end', () => {
          const generator = createGenerator(0)
          expect(generator.next()).toEqual({ value: 1, done: false })
          expect(generator.return(10)).toEqual({ value: 10, done: true })
          expect(generator.next()).toEqual({ value: undefined, done: true })
          expect(generator.next()).toEqual({ value: undefined, done: true })
          expect(generator.return(9000)).toEqual({ value: 9000, done: true })
          expect(generator.next()).toEqual({ value: undefined, done: true })
          expect(generator.next()).toEqual({ value: undefined, done: true })
        })
      })
    })
  })
})
