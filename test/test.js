const test = require('ava')
const { RoleButton } = require('..')

class Button extends RoleButton
{
}

test('role', t => {
  const instance = RoleButton.render('OK')
  t.is(instance.toString(), '<div role="Button">OK</div>')
})

test('className', t => {
  const instance = Button.render('OK')
  t.is(instance.toString(), '<div role="Button" class="Button">OK</div>')
})

test('boolean', t => {
  const instance = RoleButton.render({
    text : 'Open',
    disabled : true,
  })
  t.is(instance.disabled, true)
  t.is(instance.toString(), '<div aria-disabled="true" role="Button">Open</div>')
})

test('tristate: true', t => {
  const instance = RoleButton.render({
    text : 'Open',
    pressed : true,
  })
  t.is(instance.pressed, true)
  t.is(instance.toString(), '<div aria-pressed="true" role="Button">Open</div>')
  instance.pressed = 'true'
  t.is(instance.pressed, true)
  instance.pressed = '*'
  t.is(instance.pressed, true)
  instance.pressed = 1
  t.is(instance.pressed, true)
  instance.pressed = 42
  t.is(instance.pressed, true)
})

test('tristate: false', t => {
  const instance = RoleButton.render({
    text : 'Open',
    pressed : false,
  })
  t.is(instance.pressed, false)
  t.is(instance.toString(), '<div aria-pressed="false" role="Button">Open</div>')
  instance.pressed = 'false'
  t.is(instance.pressed, false)
  instance.pressed = 0
  t.is(instance.pressed, false)
})

test('tristate: mixed', t => {
  const instance = RoleButton.render({
    text : 'Open',
    pressed : 'mixed',
  })
  t.is(instance.pressed, 'mixed')
  t.is(instance.toString(), '<div aria-pressed="mixed" role="Button">Open</div>')
})

test('tristate: undefined', t => {
  const instance = RoleButton.render({
    text : 'Open',
    pressed : undefined,
  })
  t.is(instance.pressed, undefined)
  t.is(instance.toString(), '<div role="Button">Open</div>')
  instance.pressed = null
  t.is(instance.pressed, undefined)
  instance.node.setAttribute('aria-pressed', '')
  t.is(instance.pressed, undefined)
  instance.node.setAttribute('aria-pressed', 'undefined')
  t.is(instance.pressed, undefined)
})
