const test = require('ava')
const { RoleButton } = require('..')

test('true', t => {
  const instance = RoleButton.render({
    text : 'Toggle',
    hidden : true,
  })
  t.is(instance.hidden, true)
  t.is(instance.toString(), '<div aria-hidden="true" role="Button">Toggle</div>')

  instance.hidden = 'true'
  t.is(instance.hidden, true)

  instance.hidden = '*'
  t.is(instance.hidden, true)

  instance.hidden = 1
  t.is(instance.hidden, true)

  instance.hidden = 42
  t.is(instance.hidden, true)
})

test('false', t => {
  const instance = RoleButton.render({
    text : 'Toggle',
    hidden : false,
  })
  t.is(instance.hidden, false)
  t.is(instance.toString(), '<div aria-hidden="false" role="Button">Toggle</div>')

  instance.hidden = 'false'
  t.is(instance.hidden, false)

  instance.hidden = 0
  t.is(instance.hidden, false)
})

test('undefined', t => {
  const instance = RoleButton.render({
    text : 'Toggle',
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
