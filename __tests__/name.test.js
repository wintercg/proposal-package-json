const Ajv = require('ajv')
const pkgSchema = require('../src/schemas/pkg.json')

const ajv = new Ajv()
const validate = ajv.compile(pkgSchema.schema)

describe('Property: name', () => {
  it('Should be an optional property', () => {
    const emptyPkg = {}
    const valid = validate(emptyPkg)
    expect(valid).toEqual(true)
    expect(validate.errors).toEqual(null)
  })
  it('Should support empty strings', () => {
    const valid = validate({name: ''})
    expect(valid).toEqual(true)
    expect(validate.errors).toEqual(null)
  })
  it('Should support strings with 214 characters or less', () => {
    const maxLimitName = 'a'.repeat(214)
    const valid = validate({name: maxLimitName})
    expect(valid).toEqual(true)
    expect(validate.errors).toEqual(null)
  })
})
