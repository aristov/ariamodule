const test = require('ava')
const { RoleApplication } = require('..')

test('AriaRelevant: all', t => {
  const elem = RoleApplication.render({
    children : 'Foo',
    relevant : 'all',
  })

  t.deepEqual(elem.relevant, ['all'])
  t.is(elem.toString(), '<div role="Application" aria-relevant="all">Foo</div>')
})

test('AriaRelevant: [additions, removals, text]', t => {
  const elem = RoleApplication.render({
    children : 'Foo',
    relevant : ['additions', 'removals', 'text'],
  })

  t.deepEqual(elem.relevant, ['additions', 'removals', 'text'])
  t.is(elem.toString(), '<div role="Application" aria-relevant="additions removals text">Foo</div>')
})

test('AriaRelevant: []', t => {
  const elem = RoleApplication.render({
    children : 'Foo',
    relevant : [],
  })

  t.deepEqual(elem.relevant, [])
  t.is(elem.toString(), '<div role="Application">Foo</div>')
})


test('AriaRelevant: null', t => {
  const elem = RoleApplication.render({
    children : 'Foo',
    relevant : null,
  })

  t.deepEqual(elem.relevant, [])
  t.is(elem.toString(), '<div role="Application">Foo</div>')

  elem.node.setAttribute('aria-relevant', '')

  t.deepEqual(elem.relevant, [])
})
