const test = require('ava')
const { RoleButton } = require('..')

test('AriaPressed: true', t => {
  const elem = RoleButton.render({
    children : 'Toggle',
    pressed : true,
  })

  t.is(elem.pressed, true)
  t.is(elem.toString(), '<div role="Button" aria-pressed="true">Toggle</div>')

  elem.pressed = 'true'

  t.is(elem.pressed, true)

  elem.pressed = '*'

  t.is(elem.pressed, true)

  elem.pressed = 1

  t.is(elem.pressed, true)

  elem.pressed = 42

  t.is(elem.pressed, true)
})

test('AriaPressed: false', t => {
  const elem = RoleButton.render({
    children : 'Toggle',
    pressed : false,
  })

  t.is(elem.pressed, false)
  t.is(elem.toString(), '<div role="Button" aria-pressed="false">Toggle</div>')

  elem.pressed = 'false'

  t.is(elem.pressed, false)

  elem.pressed = 0

  t.is(elem.pressed, false)
})

test('AriaPressed: mixed', t => {
  const elem = RoleButton.render({
    children : 'Toggle',
    pressed : 'mixed',
  })

  t.is(elem.pressed, 'mixed')
  t.is(elem.toString(), '<div role="Button" aria-pressed="mixed">Toggle</div>')
})

test('AriaPressed: undefined', t => {
  const elem = RoleButton.render({
    children : 'Toggle',
    pressed : undefined,
  })

  t.is(elem.pressed, undefined)
  t.is(elem.toString(), '<div role="Button">Toggle</div>')

  elem.pressed = null

  t.is(elem.pressed, undefined)

  elem.pressed = 'undefined'

  t.is(elem.pressed, undefined)

  elem.pressed = ''

  t.is(elem.pressed, undefined)

  elem.node.setAttribute('aria-pressed', '')

  t.is(elem.pressed, undefined)

  elem.node.setAttribute('aria-pressed', 'undefined')

  t.is(elem.pressed, undefined)
})
