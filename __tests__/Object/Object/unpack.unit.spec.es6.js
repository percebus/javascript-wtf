describe('Object', () => {
  'use strict'

  describe('unpacking', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU
    function newCoordinate () {
      return { longitude: 180, latitude: 90 }
    }

    const coordinate = newCoordinate()

    describe('{ longitude, latitude } = newCoordinate()', () => {
      const { longitude, latitude } = coordinate

      describe('longitude', () => {
        it('equals 180, from coordinate.longitude', () => {
          expect(longitude).toBe(coordinate.longitude)
          expect(longitude).toBe(180)
        })
      })

      describe('latitude', () => {
        it('equals 90, from coordinate.latitude', () => {
          expect(latitude).toBe(coordinate.latitude)
          expect(latitude).toBe(90)
        })
      })
    })
  })
})
