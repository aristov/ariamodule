const test = require('ava')
const { RoleButton } = require('..')

test('AriaHidden: true', t => {
  const instance = RoleButton.render({
    children : 'Toggle',
    hidden : true,
  })
  t.is(instance.hidden, true)
  t.is(instance.toString(), '<div role="Button" aria-hidden="true">Toggle</div>')

  instance.hidden = 'true'
  t.is(instance.hidden, true)

  instance.hidden = '*'
  t.is(instance.hidden, true)

  instance.hidden = 1
  t.is(instance.hidden, true)

  instance.hidden = 42
  t.is(instance.hidden, true)
})

test('AriaHidden: false', t => {
  const instance = RoleButton.render({
    children : 'Toggle',
    hidden : false,
  })
  t.is(instance.hidden, false)
  t.is(instance.toString(), '<div role="Button" aria-hidden="false">Toggle</div>')

  instance.hidden = 'false'
  t.is(instance.hidden, false)

  instance.hidden = 0
  t.is(instance.hidden, false)
})

test('AriaHidden: undefined', t => {
  const instance = RoleButton.render({
    children : 'Toggle',
    hidden : undefined,
  })
  t.is(instance.hidden, undefined)
  t.is(instance.toString(), '<div role="Button">Toggle</div>')

  instance.hidden = null
  t.is(instance.hidden, undefined)

  instance.hidden = 'undefined'
  t.is(instance.hidden, undefined)

  instance.hidden = ''
  t.is(instance.hidden, undefined)

  instance.node.setAttribute('aria-hidden', '')
  t.is(instance.hidden, undefined)

  instance.node.setAttribute('aria-hidden', 'undefined')
  t.is(instance.hidden, undefined)
})
