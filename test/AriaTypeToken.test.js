const test = require('ava')
const { RoleAlert } = require('..')

test('AriaLive: polite', t => {
  const elem = RoleAlert.render({
    children : 'Warning!',
    live : 'polite',
  })

  t.is(elem.live, 'polite')
  t.is(elem.toString(), '<div role="Alert" aria-live="polite">Warning!</div>')
})

test('AriaLive: assertive', t => {
  const elem = RoleAlert.render({
    children : 'Warning!',
    live : 'assertive',
  })

  t.is(elem.live, 'assertive')
  t.is(elem.toString(), '<div role="Alert" aria-live="assertive">Warning!</div>')
})

test('AriaLive: off', t => {
  const elem = RoleAlert.render({
    children : 'Warning!',
    live : 'off',
  })

  t.is(elem.live, 'off')
  t.is(elem.toString(), '<div role="Alert" aria-live="off">Warning!</div>')
})

test('AriaLive: undefined', t => {
  const elem = RoleAlert.render({
    children : 'Warning!',
    live : undefined,
  })

  t.is(elem.live, undefined)
  t.is(elem.toString(), '<div role="Alert">Warning!</div>')

  elem.live = 'undefined'

  t.is(elem.live, undefined)
})
