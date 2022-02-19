describe('Array', () => {
  'use strict'

  describe('<3 empty slots>', () => {
    const _it = xit
    // FIXME _it = isSafari ? xit : it

    const list = []
    list.length = 3

    /* eslint-disable comma-spacing */
    /* eslint-disable no-sparse-arrays */
    const tests = {
      '[].length=3': list,
      '[,,,]': [, , ,], // 3 commas? so 4 items? 0-3?
      '[ undefined x 3 ]': [undefined, undefined, undefined],
      'Array(3)': Array(3), // 0-2 ?
      'new Array(3)': new Array(3) // 0-2?
    }
    /* eslint-enable no-sparse-arrays */
    /* eslint-enable comma-spacing */

    _.forEach(tests, (emptySlots, testName) => {
      describe(testName, () => {
        it('is instanceof Array', () => {
          expect(emptySlots instanceof Array).toBe(true)
        })

        it("is typeof 'object'", () => {
          expect(typeof (emptySlots)).toEqual('object')
        })

        describe('lodash', () => {
          it('_.isArray', () => {
            expect(_.isArray(emptySlots)).toBe(true)
          })
        })

        it('has length 3', () => {
          expect(emptySlots.length).toBe(3) // 0-2
        })

        /* Expected [ undefined, undefined, undefined ]
         * to equal [ undefined, undefined, undefined ].
         */
        _it('equals [undefined, undefined, undefined]', () => {
          expect(emptySlots).toEqual([undefined, undefined, undefined])
        })

        describe('.toString()', () => {
          _it("equals ',,'", () => {
            expect(emptySlots.toString()).toEqual(',,')
          })

          it("does NOT equal '[undefined, undefined, undefined]'", () => { // of course NOT, why would it?!
            expect(emptySlots.toString()).not.toEqual('[undefined, undefined, undefined]') // because, F U!
          })
        })

        describe(".map(x => 'slot')", () => {
          const string = emptySlots
            .map(x => 'slot')
            .join(';')

          if (testName === '[ undefined x 3 ]') {
            describe('[ undefined x 3 ]', () => { // Only [undefined, undefined, undefined] is a "true" array
              it("equals 'slot;slot;slot'", () => {
                expect(string).toEqual('slot;slot;slot')
              })
            })
          } else {
            describe('empty slots', () => { // The rest are... "empty slots"
              it("does NOT equal 'slot;slot;slot'", () => {
                expect(string).not.toEqual('slot;slot;slot')
              })

              it("actually equals ';;'", () => {
                expect(string).toEqual(';;') // where did 'slot' go?
              })
            })
          }
        })
      })
    })
  })
})
