describe('Array', () => {
  'use strict'

  describe('Array(3)', () => {
    const _it = xit
    // FIXME _it = isSafari ? xit : it

    const list = []
    list.length = 3

    /* eslint-disable no-sparse-arrays */
    /* eslint-disable comma-spacing */
    const emptyArrays = {
      '[].length=3': list,
      '[,,,]': [,,,], // 3 commas? so 4 items? 0-3?
      '[undefined, undefined, undefined]': [undefined, undefined, undefined],
      'Array(3)': Array(3), // 0-2 ?
      'new Array(3)': new Array(3) // 0-2?
    }
    /* eslint-enable no-sparse-arrays */
    /* eslint-enable comma-spacing */

    _.forEach(emptyArrays, (emptyArray, testName) => {
      describe(testName, () => {
        it('has length 3', () => {
          expect(emptyArray.length).toBe(3) // 0-2
        })

        /* Expected [ undefined, undefined, undefined ]
         * to equal [ undefined, undefined, undefined ].
         */
        _it('equals [undefined, undefined, undefined]', () => {
          expect(emptyArray).toEqual([undefined, undefined, undefined])
        })

        describe('.toString()', () => {
          _it("equals ',,'", () => {
            expect(emptyArray.toString()).toEqual(',,')
          })

          it("does NOT equal '[undefined, undefined, undefined]'", () => { // of course NOT, why would it?!
            expect(emptyArray.toString()).not.toEqual('[undefined, undefined, undefined]') // because, F U!
          })
        })
      })
    })
  })
})
