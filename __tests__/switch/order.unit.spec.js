describe('switch', () => {
  'use strict'

  describe('case order', () => {
    describe('magicNumber', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU
      function magicNumber (x) {
        let result = 0

        /* eslint-disable no-fallthrough */
        /* eslint-disable default-case-last */
        switch (x) {
          default: // at the beginning?
            result += 1
            // break

          case 10:
          case 20:
            result += 2
            break

          case 30:
            result += 4
            break
        }
        /* eslint-enable default-case-last */
        /* eslint-enable no-fallthrough */

        return result
      }

      /*
       * switch (x) {
       *     default:      // default runs last
       *       result += 1 // * skips *
       *    // break       // no breaks! falls through
       *
       *     case 10:      // 10? YES
       *     case 20:
       *       result += 2 // 0 + 2 = 2
       *       break
       *   }
       */
      describe('10', () => {
        it('returns 2', () => {
          expect(magicNumber(10)).toBe(2)
        })
      })

      describe('20', () => {
        it('returns 2', () => {
          expect(magicNumber(20)).toBe(2)
        })
      })

      /*
       * switch (x) {
       *     default:      // default runs last
       *       result += 1 // * skips *
       *    // break       // no breaks! falls through
       *
       *     case 10:      // 30? nope
       *     case 20:      // 30? nope
       *       result += 2 // * should skip *
       *       break
       *
       *     case 30:      // 30? YES!
       *       result += 4 // 0 + 4 = 4
       *       break
       *   }
       */
      describe('30', () => {
        it('returns 4', () => {
          expect(magicNumber(30)).toBe(4)
        })
      })

      /*
       * switch (x) {
       *     default:      // default runs last
       *       result += 1 // * skips? *
       *    // break       // no breaks! falls through
       *
       *     case 10:      // 42? nope
       *     case 20:      // 42? nope
       *       result += 2 // * should skip *
       *       break
       *
       *     case 30:      // 42 ? nope
       *       result += 4 // * does NOT run *
       *       break
       *                   // wait, where is 'default' ?
       *                   // let me run this 1 more time
       *
       *     default:      // default, always runs
       *       result += 1 // 0 + 1 = 1
       *     case 10:
       *     case 20:
       *       result += 2 // 1 + 2 = 3
       *       break
       *   }
       */
      describe('42', () => {
        it('returns 3', () => {
          expect(magicNumber(42)).toBe(3)
        })
      })
    })
  })
})
