describe('String', () => {
  'use strict'

  describe('parse', () => {
    let result
    describe('Object', () => {
      describe('String({})', () => {
        beforeEach(() => {
          result = String({})
        })

        it("returns '[object Object]' string", () => {
          expect(result).toEqual('[object Object]')
        })

        it('is typeof string', () => {
          expect(typeof (result)).toEqual('string')
        })
      })

      describe('String([])', () => {
        beforeEach(() => {
          result = String([])
        })

        it("returns ''", () => {
          expect(result).not.toEqual('object Object')
          expect(result).toEqual('')
        })

        it('is typeof string', () => {
          expect(typeof (result)).toEqual('string')
        })
      })
    })
  })
})
