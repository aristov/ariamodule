const test = require('ava')
const { RoleButton } = require('..')

test('AriaLabelledBy: id1', t => {
  const elem = RoleButton.render({
    labelledBy : 'id1'
  })

  t.deepEqual(elem.labelledBy, ['id1'])
  t.is(elem.toString(), '<div role="Button" aria-labelledby="id1"></div>')
})

test('AriaLabelledBy: []', t => {
  const elem = RoleButton.render({
    labelledBy : []
  })

  t.deepEqual(elem.labelledBy, [])
  t.is(elem.toString(), '<div role="Button"></div>')
})

test('AriaLabelledBy: [id1, id2, id3]', t => {
  const elem = RoleButton.render({
    labelledBy : ['id1', 'id2', 'id3']
  })

  t.deepEqual(elem.labelledBy, ['id1', 'id2', 'id3'])
  t.is(elem.toString(), '<div role="Button" aria-labelledby="id1 id2 id3"></div>')
})

test('AriaLabelledBy: [id1, null, id3]', t => {
  const elem = RoleButton.render({
    labelledBy : ['id1', null, 'id3']
  })

  t.deepEqual(elem.labelledBy, ['id1', 'id3'])
  t.is(elem.toString(), '<div role="Button" aria-labelledby="id1 id3"></div>')
})

test('AriaLabelledBy: null', t => {
  const elem = RoleButton.render({
    labelledBy : null
  })

  t.deepEqual(elem.labelledBy, [])
  t.is(elem.toString(), '<div role="Button"></div>')
})
