const test = require('ava')
const { RoleButton } = require('..')

test('AriaDisabled: true', t => {
  const instance = RoleButton.render({
    children : 'OK',
    disabled : true,
  })
  t.is(instance.disabled, true)
  t.is(instance.toString(), '<div role="Button" aria-disabled="true">OK</div>')

  instance.disabled = 'true'
  t.is(instance.disabled, true)

  instance.disabled = 'foo'
  t.is(instance.disabled, true)

  instance.disabled = 1
  t.is(instance.disabled, true)

  instance.disabled = 42
  t.is(instance.disabled, true)

  instance.node.setAttribute('aria-disabled', 'foo')
  t.is(instance.disabled, true)
})

test('AriaDisabled: false', t => {
  const instance = RoleButton.render({
    children : 'OK',
    disabled : false,
  })
  t.is(instance.disabled, false)
  t.is(instance.toString(), '<div role="Button">OK</div>')

  instance.disabled = 'false'
  t.is(instance.disabled, false)

  instance.disabled = ''
  t.is(instance.disabled, false)

  instance.disabled = null
  t.is(instance.disabled, false)

  instance.disabled = undefined
  t.is(instance.disabled, false)

  instance.disabled = 0
  t.is(instance.disabled, false)

  instance.node.setAttribute('aria-disabled', 'false')
  t.is(instance.disabled, false)

  instance.node.setAttribute('aria-disabled', '')
  t.is(instance.disabled, false)
})
