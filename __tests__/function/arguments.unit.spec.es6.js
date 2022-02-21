describe('function', () => {
  'use strict'

  describe('newCoordinate(...)', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU
    function newCoordinate1 (x, y) {
      return { longitude: x, latitude: y }
    }

    function newCoordinate2 (longitude = 0, latitude = 0) { // assigned/default values
      return { longitude, latitude }
    }

    function newCoordinate3 (coordinate) { // object
      return {
        longitude: coordinate.longitude,
        latitude: coordinate.latitude
      }
    }

    function newCoordinate4 ({ longitude, latitude }) { // object, w/ expected properties
      return { longitude, latitude }
    }

    function newCoordinate5 (coordinate = { longitude: 0, latitude: 0 }) { // default object, with default properties
      return coordinate
    }

    function newCoordinate6 ({ x: longitude, y: latitude }) { // renaming argument-object's properties
      return { longitude, latitude }
    }

    const coordinates = {
      'return {longitude:x, latitude:y}': newCoordinate1(180, 90),
      'return { longitude, latitude }': newCoordinate2(180, 90),
      'newCoordinate(coordinate)': newCoordinate3({ latitude: 90, longitude: 180 }),
      'newCoordinate({latitude:180, longitude:90})': newCoordinate4({ latitude: 90, longitude: 180 }),
      'newCoordinate(coordinate = {longitude:0, latitude:0})': newCoordinate5({ latitude: 90, longitude: 180 }),
      'newCoordinate({x:180, y:180})': newCoordinate6({ x: 180, y: 90 })
    }

    _.forEach(coordinates, (coordinate, testName) => {
      describe(testName, () => {
        describe('unpacking', () => {
          describe('as-is', () => {
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

          describe('rename', () => {
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
