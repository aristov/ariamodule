const test = require('ava')
const { RoleAlert } = require('..')

test('AriaLive: polite', t => {
  const instance = RoleAlert.render({
    text : 'Warning!',
    live : 'polite',
  })
  t.is(instance.live, 'polite')
  t.is(instance.toString(), '<div aria-live="polite" role="Alert">Warning!</div>')
})

test('AriaLive: assertive', t => {
  const instance = RoleAlert.render({
    text : 'Warning!',
    live : 'assertive',
  })
  t.is(instance.live, 'assertive')
  t.is(instance.toString(), '<div aria-live="assertive" role="Alert">Warning!</div>')
})

test('AriaLive: off', t => {
  const instance = RoleAlert.render({
    text : 'Warning!',
    live : 'off',
  })
  t.is(instance.live, 'off')
  t.is(instance.toString(), '<div aria-live="off" role="Alert">Warning!</div>')
})

test('AriaLive: undefined', t => {
  const instance = RoleAlert.render({
    text : 'Warning!',
    live : undefined,
  })
  t.is(instance.live, undefined)
  t.is(instance.toString(), '<div role="Alert">Warning!</div>')

  instance.live = 'undefined'
  t.is(instance.live, undefined)

  instance.node.setAttribute('aria-live', 'undefined')
  t.is(instance.live, undefined)
})
