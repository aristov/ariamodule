const test = require('ava')
const { RoleButton } = require('..')

test('AriaPressed: true', t => {
  const instance = RoleButton.render({
    text : 'Toggle',
    pressed : true,
  })
  t.is(instance.pressed, true)
  t.is(instance.toString(), '<div aria-pressed="true" role="Button">Toggle</div>')

  instance.pressed = 'true'
  t.is(instance.pressed, true)

  instance.pressed = '*'
  t.is(instance.pressed, true)

  instance.pressed = 1
  t.is(instance.pressed, true)

  instance.pressed = 42
  t.is(instance.pressed, true)
})

test('AriaPressed: false', t => {
  const instance = RoleButton.render({
    text : 'Toggle',
    pressed : false,
  })
  t.is(instance.pressed, false)
  t.is(instance.toString(), '<div aria-pressed="false" role="Button">Toggle</div>')

  instance.pressed = 'false'
  t.is(instance.pressed, false)

  instance.pressed = 0
  t.is(instance.pressed, false)
})

test('AriaPressed: mixed', t => {
  const instance = RoleButton.render({
    text : 'Toggle',
    pressed : 'mixed',
  })
  t.is(instance.pressed, 'mixed')
  t.is(instance.toString(), '<div aria-pressed="mixed" role="Button">Toggle</div>')
})

test('AriaPressed: undefined', t => {
  const instance = RoleButton.render({
    text : 'Toggle',
    pressed : undefined,
  })
  t.is(instance.pressed, undefined)
  t.is(instance.toString(), '<div role="Button">Toggle</div>')

  instance.pressed = null
  t.is(instance.pressed, undefined)

  instance.pressed = 'undefined'
  t.is(instance.pressed, undefined)

  instance.pressed = ''
  t.is(instance.pressed, undefined)

  instance.node.setAttribute('aria-pressed', '')
  t.is(instance.pressed, undefined)

  instance.node.setAttribute('aria-pressed', 'undefined')
  t.is(instance.pressed, undefined)
})
