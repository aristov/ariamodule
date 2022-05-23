const test = require('ava')
const { RoleArticle } = require('..')

test('AriaPosInSet: 0', t => {
  const instance = RoleArticle.render({
    text : 'Lorem ipsum',
    posInSet : .0,
  })
  t.is(instance.posInSet, 0)
  t.is(instance.toString(), '<div aria-posinset="0" role="Article">Lorem ipsum</div>')

  instance.posInSet = .0e-1
  t.is(instance.posInSet, 0)

  instance.posInSet = ''
  t.is(instance.posInSet, 0)

  instance.posInSet = '.0'
  t.is(instance.posInSet, 0)

  instance.posInSet = '.0e-1'
  t.is(instance.posInSet, 0)

  instance.posInSet = []
  t.is(instance.posInSet, 0)

  instance.posInSet = [.0]
  t.is(instance.posInSet, 0)

  instance.posInSet = ['.0e-1']
  t.is(instance.posInSet, 0)

  instance.posInSet = false
  t.is(instance.posInSet, 0)

  instance.node.setAttribute('aria-posinset', '.0')
  t.is(instance.posInSet, 0)

  instance.node.setAttribute('aria-posinset', '.0e-1')
  t.is(instance.posInSet, 0)
})

test('AriaPosInSet: 1', t => {
  const instance = RoleArticle.render({
    text : 'Lorem ipsum',
    posInSet : 1.1,
  })
  t.is(instance.posInSet, 1)
  t.is(instance.toString(), '<div aria-posinset="1" role="Article">Lorem ipsum</div>')

  instance.posInSet = 11e-1
  t.is(instance.posInSet, 1)

  instance.posInSet = '1.1'
  t.is(instance.posInSet, 1)

  instance.posInSet = '1.1'
  t.is(instance.posInSet, 1)

  instance.posInSet = '11e-1'
  t.is(instance.posInSet, 1)

  instance.posInSet = [1.1]
  t.is(instance.posInSet, 1)

  instance.posInSet = ['11e-1']
  t.is(instance.posInSet, 1)

  instance.posInSet = true
  t.is(instance.posInSet, 1)

  instance.node.setAttribute('aria-posinset', '1.1')
  t.is(instance.posInSet, 1)

  instance.node.setAttribute('aria-posinset', '11e-1')
  t.is(instance.posInSet, 1)
})

test('AriaPosInSet: 4', t => {
  const instance = RoleArticle.render({
    text : 'Lorem ipsum',
    posInSet : 4.2,
  })
  t.is(instance.posInSet, 4)
  t.is(instance.toString(), '<div aria-posinset="4" role="Article">Lorem ipsum</div>')

  instance.posInSet = 42e-1
  t.is(instance.posInSet, 4)

  instance.posInSet = '4.2'
  t.is(instance.posInSet, 4)

  instance.posInSet = '42e-1'
  t.is(instance.posInSet, 4)

  instance.posInSet = [4.2]
  t.is(instance.posInSet, 4)

  instance.posInSet = ['4.2']
  t.is(instance.posInSet, 4)

  instance.node.setAttribute('aria-posinset', '4.2')
  t.is(instance.posInSet, 4)

  instance.node.setAttribute('aria-posinset', '42e-1')
  t.is(instance.posInSet, 4)
})

test('AriaPosInSet: NaN', t => {
  const instance = RoleArticle.render({
    text : 'Lorem ipsum',
    posInSet : NaN,
  })
  t.is(instance.posInSet, NaN)
  t.is(instance.toString(), '<div aria-posinset="NaN" role="Article">Lorem ipsum</div>')

  instance.posInSet = 'NaN'
  t.is(instance.posInSet, NaN)

  instance.posInSet = 'xyz'
  t.is(instance.posInSet, NaN)

  instance.posInSet = {}
  t.is(instance.posInSet, NaN)

  instance.posInSet = [.0, 4.2, 1.1]
  t.is(instance.posInSet, NaN)

  instance.posInSet = function() {}
  t.is(instance.posInSet, NaN)

  instance.posInSet = undefined
  t.is(instance.posInSet, NaN)

  instance.node.setAttribute('aria-posinset', 'true')
  t.is(instance.posInSet, NaN)

  instance.node.setAttribute('aria-posinset', 'false')
  t.is(instance.posInSet, NaN)

  instance.node.setAttribute('aria-posinset', 'undefined')
  t.is(instance.posInSet, NaN)

  instance.node.setAttribute('aria-posinset', 'xyz')
  t.is(instance.posInSet, NaN)
})

test('AriaPosInSet: Infinity', t => {
  const instance = RoleArticle.render({
    text : 'Lorem ipsum',
    posInSet : Infinity,
  })
  t.is(instance.posInSet, Infinity)
  t.is(instance.toString(), '<div aria-posinset="Infinity" role="Article">Lorem ipsum</div>')

  instance.posInSet = 'Infinity'
  t.is(instance.posInSet, Infinity)
})

test('AriaPosInSet: null', t => {
  const instance = RoleArticle.render({
    text : 'Lorem ipsum',
    posInSet : null,
  })
  t.is(instance.posInSet, null)
  t.is(instance.toString(), '<div role="Article">Lorem ipsum</div>')

  instance.node.setAttribute('aria-posinset', '')
  t.is(instance.posInSet, null)
})
