const test = require('ava')
const { RoleAlert } = require('..')

test('AriaLive: polite', t => {
  const instance = RoleAlert.render({
    children : 'Warning!',
    live : 'polite',
  })

  t.is(instance.live, 'polite')
  t.is(instance.toString(), '<div role="Alert" aria-live="polite">Warning!</div>')
})

test('AriaLive: assertive', t => {
  const instance = RoleAlert.render({
    children : 'Warning!',
    live : 'assertive',
  })

  t.is(instance.live, 'assertive')
  t.is(instance.toString(), '<div role="Alert" aria-live="assertive">Warning!</div>')
})

test('AriaLive: off', t => {
  const instance = RoleAlert.render({
    children : 'Warning!',
    live : 'off',
  })

  t.is(instance.live, 'off')
  t.is(instance.toString(), '<div role="Alert" aria-live="off">Warning!</div>')
})

test('AriaLive: undefined', t => {
  const instance = RoleAlert.render({
    children : 'Warning!',
    live : undefined,
  })

  t.is(instance.live, undefined)
  t.is(instance.toString(), '<div role="Alert">Warning!</div>')

  instance.live = 'undefined'

  t.is(instance.live, undefined)

  instance.node.setAttribute('aria-live', 'undefined')

  t.is(instance.live, undefined)
})
