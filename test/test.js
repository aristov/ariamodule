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

test('aria-attributes', t => {
  const instance = RoleButton.render({
    text : 'Open',
    pressed : false,
  })
  t.is(instance.pressed, false)
  t.is(instance.toString(), '<div aria-pressed="false" role="Button">Open</div>')
})
