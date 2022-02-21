describe('Object', () => {
  'use strict'

  describe('newCoordinate(longitude, latitude)', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU
    function newCoordinate1 (x, y) {
      return { longitude: x, latitude: y }
    }

    function newCoordinate2 (longitude, latitude) {
      return { longitude, latitude }
    }

    function newCoordinate3 ({ longitude, latitude }) {
      return { longitude, latitude }
    }

    const coordinates = {
      '{longitude:x, latitude:y}': newCoordinate1(180, 90),
      '{ longitude, latitude }': newCoordinate2(180, 90),
      '({latitude:180, longitude:90})': newCoordinate3({ latitude: 90, longitude: 180 })
    }

    _.forEach(coordinates, (coordinate, testName) => {
      describe(testName, () => {
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
            // const { x: longitude, y: latitude } = coordinate // I would expect THIS
            const { longitude: x, latitude: y } = coordinate // not THIS

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
