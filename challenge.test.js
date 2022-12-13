const challenge = require('./challenge')

describe('Solve the challenge', () => {
  it('should work with the empty string', () => {
    const input = ''
    const output = challenge(input)

    expect(output).toEqual(input)
  })

  it('should work with a single-char string', () => {
    const input = 'p'
    const output = challenge(input)

    expect(output).toEqual(input)
  })

  it('should work with a string that is already equal to itself, if read backwards', () => {
    const input = 'nortron'
    const output = challenge(input)

    expect(output).toEqual(input)
  })

  it('should work with my name', () => {
    const input = 'Paolo'
    const output = challenge(input)
    const expected = 'oloaP'

    expect(output).toEqual(expected)
  })

  // Feel free to add more tests and please, make a pull request,
  // so that I integrate your tests!
})