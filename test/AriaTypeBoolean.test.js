const test = require('ava')
const { RoleButton } = require('..')

test('AriaDisabled: true', t => {
  const elem = RoleButton.render({
    children : 'OK',
    disabled : true,
  })

  t.is(elem.disabled, true)
  t.is(elem.toString(), '<div role="Button" aria-disabled="true">OK</div>')

  elem.disabled = 'true'

  t.is(elem.disabled, true)

  elem.disabled = 'foo'

  t.is(elem.disabled, true)

  elem.disabled = 1

  t.is(elem.disabled, true)

  elem.disabled = 42

  t.is(elem.disabled, true)
})

test('AriaDisabled: false', t => {
  const elem = RoleButton.render({
    children : 'OK',
    disabled : false,
  })

  t.is(elem.disabled, false)
  t.is(elem.toString(), '<div role="Button">OK</div>')

  elem.disabled = 'false'

  t.is(elem.disabled, false)

  elem.disabled = ''

  t.is(elem.disabled, false)

  elem.disabled = null

  t.is(elem.disabled, false)

  elem.disabled = undefined

  t.is(elem.disabled, false)

  elem.disabled = 0

  t.is(elem.disabled, false)
})
