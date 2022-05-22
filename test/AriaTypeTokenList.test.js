const test = require('ava')
const { RoleApplication } = require('..')

test('AriaRelevant: all', t => {
  const instance = RoleApplication.render({
    text : 'Foo',
    relevant : 'all',
  })
  t.deepEqual(instance.relevant, ['all'])
  t.is(instance.toString(), '<div aria-relevant="all" role="Application">Foo</div>')
})

test('AriaRelevant: [additions, removals, text]', t => {
  const instance = RoleApplication.render({
    text : 'Foo',
    relevant : ['additions', 'removals', 'text'],
  })
  t.deepEqual(instance.relevant, ['additions', 'removals', 'text'])
  t.is(instance.toString(), '<div aria-relevant="additions removals text" role="Application">Foo</div>')
})

test('AriaRelevant: []', t => {
  const instance = RoleApplication.render({
    text : 'Foo',
    relevant : [],
  })
  t.deepEqual(instance.relevant, [])
  t.is(instance.toString(), '<div role="Application">Foo</div>')
})


test('AriaRelevant: null', t => {
  const instance = RoleApplication.render({
    text : 'Foo',
    relevant : null,
  })
  t.deepEqual(instance.relevant, [])
  t.is(instance.toString(), '<div role="Application">Foo</div>')

  instance.node.setAttribute('aria-relevant', '')
  t.deepEqual(instance.relevant, [])
})
