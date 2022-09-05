const test = require('ava')
const { RoleButton } = require('..')

test('AriaHidden: true', t => {
  const elem = RoleButton.render({
    children : 'Toggle',
    hidden : true,
  })

  t.is(elem.hidden, true)
  t.is(elem.toString(), '<div role="Button" aria-hidden="true">Toggle</div>')

  elem.hidden = 'true'

  t.is(elem.hidden, true)

  elem.hidden = '*'

  t.is(elem.hidden, true)

  elem.hidden = 1

  t.is(elem.hidden, true)

  elem.hidden = 42

  t.is(elem.hidden, true)
})

test('AriaHidden: false', t => {
  const elem = RoleButton.render({
    children : 'Toggle',
    hidden : false,
  })

  t.is(elem.hidden, false)
  t.is(elem.toString(), '<div role="Button" aria-hidden="false">Toggle</div>')

  elem.hidden = 'false'

  t.is(elem.hidden, false)

  elem.hidden = 0

  t.is(elem.hidden, false)
})

test('AriaHidden: undefined', t => {
  const elem = RoleButton.render({
    children : 'Toggle',
    hidden : undefined,
  })

  t.is(elem.hidden, undefined)
  t.is(elem.toString(), '<div role="Button">Toggle</div>')

  elem.hidden = null

  t.is(elem.hidden, undefined)

  elem.hidden = 'undefined'

  t.is(elem.hidden, undefined)

  elem.hidden = ''

  t.is(elem.hidden, undefined)
})
