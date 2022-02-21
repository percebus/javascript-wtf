describe('Object', () => {
  'use strict'

  describe('newCoordinate(longitude, latitude)', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU
    const factories = {
      '{longitude:x, latitude:y}': function newCoordinate (x, y) { return { longitude: x, latitude: y } },
      '{ longitude, latitude }': function newCoordinate (longitude, latitude) { return { longitude, latitude } }
    }

    _.forEach(factories, (newCoordinate, testName) => {
      describe(testName, () => {
        const coordinate = newCoordinate(180, 90)

        describe('unpacking', () => {
          describe('longitude, latitude = coordinate', () => {
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

          describe('{longitude:x, latitude:y}', () => {
            const { longitude: x, latitude: y } = coordinate

            describe('x', () => {
              it('equals 180, from coordinate.longitude', () => {
                expect(x).toBe(coordinate.longitude)
                expect(x).toBe(180)
              })
            })

            describe('y', () => {
              it('equals 90, from coordinate.latitude', () => {
                expect(y).toBe(coordinate.latitude)
                expect(y).toBe(90)
              })
            })
          })
        })
      })
    })
  })
})
