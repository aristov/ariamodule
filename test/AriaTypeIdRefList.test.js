const test = require('ava')
const { RoleButton } = require('..')

test('AriaLabelledBy: id1', t => {
  const instance = RoleButton.render({
    labelledBy : 'id1'
  })
  t.deepEqual(instance.labelledBy, ['id1'])
  t.is(instance.toString(), '<div aria-labelledby="id1" role="Button"></div>')
})

test('AriaLabelledBy: []', t => {
  const instance = RoleButton.render({
    labelledBy : []
  })
  t.deepEqual(instance.labelledBy, [])
  t.is(instance.toString(), '<div role="Button"></div>')
})

test('AriaLabelledBy: [id1, id2, id3]', t => {
  const instance = RoleButton.render({
    labelledBy : ['id1', 'id2', 'id3']
  })
  t.deepEqual(instance.labelledBy, ['id1', 'id2', 'id3'])
  t.is(instance.toString(), '<div aria-labelledby="id1 id2 id3" role="Button"></div>')
})

test('AriaLabelledBy: [id1, null, id3]', t => {
  const instance = RoleButton.render({
    labelledBy : ['id1', null, 'id3']
  })
  t.deepEqual(instance.labelledBy, ['id1', 'id3'])
  t.is(instance.toString(), '<div aria-labelledby="id1 id3" role="Button"></div>')
})

test('AriaLabelledBy: null', t => {
  const instance = RoleButton.render({
    labelledBy : null
  })
  t.deepEqual(instance.labelledBy, [])
  t.is(instance.toString(), '<div role="Button"></div>')

  instance.node.setAttribute('aria-labelledby', '')
  t.deepEqual(instance.labelledBy, [])
})
