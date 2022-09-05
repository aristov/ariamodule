const test = require('ava')
const { RoleArticle } = require('..')

test('AriaPosInSet: 0', t => {
  const elem = RoleArticle.render({
    children : 'Lorem ipsum',
    posInSet : .0,
  })

  t.is(elem.posInSet, 0)
  t.is(elem.toString(), '<div role="Article" aria-posinset="0">Lorem ipsum</div>')

  elem.posInSet = .0e-1

  t.is(elem.posInSet, 0)

  elem.posInSet = ''

  t.is(elem.posInSet, 0)

  elem.posInSet = '.0'

  t.is(elem.posInSet, 0)

  elem.posInSet = '.0e-1'

  t.is(elem.posInSet, 0)

  elem.posInSet = []

  t.is(elem.posInSet, 0)

  elem.posInSet = [.0]

  t.is(elem.posInSet, 0)

  elem.posInSet = ['.0e-1']

  t.is(elem.posInSet, 0)

  elem.posInSet = false

  t.is(elem.posInSet, 0)
})

test('AriaPosInSet: 1', t => {
  const elem = RoleArticle.render({
    children : 'Lorem ipsum',
    posInSet : 1.1,
  })

  t.is(elem.posInSet, 1)
  t.is(elem.toString(), '<div role="Article" aria-posinset="1">Lorem ipsum</div>')

  elem.posInSet = 11e-1

  t.is(elem.posInSet, 1)

  elem.posInSet = '1.1'

  t.is(elem.posInSet, 1)

  elem.posInSet = '1.1'

  t.is(elem.posInSet, 1)

  elem.posInSet = '11e-1'

  t.is(elem.posInSet, 1)

  elem.posInSet = [1.1]

  t.is(elem.posInSet, 1)

  elem.posInSet = ['11e-1']

  t.is(elem.posInSet, 1)

  elem.posInSet = true

  t.is(elem.posInSet, 1)
})

test('AriaPosInSet: 4', t => {
  const elem = RoleArticle.render({
    children : 'Lorem ipsum',
    posInSet : 4.2,
  })

  t.is(elem.posInSet, 4)
  t.is(elem.toString(), '<div role="Article" aria-posinset="4">Lorem ipsum</div>')

  elem.posInSet = 42e-1

  t.is(elem.posInSet, 4)

  elem.posInSet = '4.2'

  t.is(elem.posInSet, 4)

  elem.posInSet = '42e-1'

  t.is(elem.posInSet, 4)

  elem.posInSet = [4.2]

  t.is(elem.posInSet, 4)

  elem.posInSet = ['4.2']

  t.is(elem.posInSet, 4)
})

test('AriaPosInSet: NaN', t => {
  const elem = RoleArticle.render({
    children : 'Lorem ipsum',
    posInSet : NaN,
  })

  t.is(elem.posInSet, NaN)
  t.is(elem.toString(), '<div role="Article" aria-posinset="NaN">Lorem ipsum</div>')

  elem.posInSet = 'NaN'

  t.is(elem.posInSet, NaN)

  elem.posInSet = 'xyz'

  t.is(elem.posInSet, NaN)

  elem.posInSet = {}

  t.is(elem.posInSet, NaN)

  elem.posInSet = [.0, 4.2, 1.1]

  t.is(elem.posInSet, NaN)

  elem.posInSet = function() {}

  t.is(elem.posInSet, NaN)

  elem.posInSet = undefined

  t.is(elem.posInSet, NaN)
})

test('AriaPosInSet: Infinity', t => {
  const elem = RoleArticle.render({
    children : 'Lorem ipsum',
    posInSet : Infinity,
  })

  t.is(elem.posInSet, Infinity)
  t.is(elem.toString(), '<div role="Article" aria-posinset="Infinity">Lorem ipsum</div>')

  elem.posInSet = 'Infinity'

  t.is(elem.posInSet, Infinity)
})

test('AriaPosInSet: null', t => {
  const elem = RoleArticle.render({
    children : 'Lorem ipsum',
    posInSet : null,
  })

  t.is(elem.posInSet, null)
  t.is(elem.toString(), '<div role="Article">Lorem ipsum</div>')
})
