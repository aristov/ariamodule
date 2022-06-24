const test = require('ava')
const { RoleSpinButton } = require('..')

test('AriaValueNow: 0', t => {
  const elem = RoleSpinButton.render({
    children : 'Lorem ipsum',
    valueNow : .0,
  })

  t.is(elem.valueNow, 0)
  t.is(elem.toString(), '<div role="SpinButton" aria-valuenow="0">Lorem ipsum</div>')

  elem.valueNow = .0e-1

  t.is(elem.valueNow, 0)

  elem.valueNow = ''

  t.is(elem.valueNow, 0)

  elem.valueNow = '.0'

  t.is(elem.valueNow, 0)

  elem.valueNow = '.0e-1'

  t.is(elem.valueNow, 0)

  elem.valueNow = []

  t.is(elem.valueNow, 0)

  elem.valueNow = [.0]

  t.is(elem.valueNow, 0)

  elem.valueNow = ['.0e-1']

  t.is(elem.valueNow, 0)

  elem.valueNow = false

  t.is(elem.valueNow, 0)

  elem.node.setAttribute('aria-valuenow', '.0')

  t.is(elem.valueNow, 0)

  elem.node.setAttribute('aria-valuenow', '.0e-1')

  t.is(elem.valueNow, 0)
})

test('AriaValueNow: 1', t => {
  const elem = RoleSpinButton.render({
    children : 'Lorem ipsum',
    valueNow : 1,
  })

  t.is(elem.valueNow, 1)
  t.is(elem.toString(), '<div role="SpinButton" aria-valuenow="1">Lorem ipsum</div>')

  elem.valueNow = .1e1

  t.is(elem.valueNow, 1)

  elem.valueNow = '1'

  t.is(elem.valueNow, 1)

  elem.valueNow = '.1e1'

  t.is(elem.valueNow, 1)

  elem.valueNow = [1]

  t.is(elem.valueNow, 1)

  elem.valueNow = ['.1e1']

  t.is(elem.valueNow, 1)

  elem.valueNow = true

  t.is(elem.valueNow, 1)

  elem.node.setAttribute('aria-valuenow', '1')

  t.is(elem.valueNow, 1)

  elem.node.setAttribute('aria-valuenow', '.1e1')

  t.is(elem.valueNow, 1)
})

test('AriaValueNow: 4.2', t => {
  const elem = RoleSpinButton.render({
    children : 'Lorem ipsum',
    valueNow : 4.2,
  })

  t.is(elem.valueNow, 4.2)
  t.is(elem.toString(), '<div role="SpinButton" aria-valuenow="4.2">Lorem ipsum</div>')

  elem.valueNow = 42e-1

  t.is(elem.valueNow, 4.2)

  elem.valueNow = '4.2'

  t.is(elem.valueNow, 4.2)

  elem.valueNow = '42e-1'

  t.is(elem.valueNow, 4.2)

  elem.valueNow = [4.2]

  t.is(elem.valueNow, 4.2)

  elem.valueNow = ['4.2']

  t.is(elem.valueNow, 4.2)

  elem.node.setAttribute('aria-valuenow', '4.2')

  t.is(elem.valueNow, 4.2)

  elem.node.setAttribute('aria-valuenow', '42e-1')

  t.is(elem.valueNow, 4.2)
})

test('AriaValueNow: NaN', t => {
  const elem = RoleSpinButton.render({
    children : 'Lorem ipsum',
    valueNow : NaN,
  })

  t.is(elem.valueNow, NaN)
  t.is(elem.toString(), '<div role="SpinButton" aria-valuenow="NaN">Lorem ipsum</div>')

  elem.valueNow = 'NaN'

  t.is(elem.valueNow, NaN)

  elem.valueNow = 'xyz'

  t.is(elem.valueNow, NaN)

  elem.valueNow = {}

  t.is(elem.valueNow, NaN)

  elem.valueNow = [.0, 4.2, 1.1]

  t.is(elem.valueNow, NaN)

  elem.valueNow = function() {}

  t.is(elem.valueNow, NaN)

  elem.valueNow = undefined

  t.is(elem.valueNow, NaN)

  elem.node.setAttribute('aria-valuenow', 'true')

  t.is(elem.valueNow, NaN)

  elem.node.setAttribute('aria-valuenow', 'false')

  t.is(elem.valueNow, NaN)

  elem.node.setAttribute('aria-valuenow', 'undefined')

  t.is(elem.valueNow, NaN)

  elem.node.setAttribute('aria-valuenow', 'xyz')

  t.is(elem.valueNow, NaN)
})

test('AriaValueNow: Infinity', t => {
  const elem = RoleSpinButton.render({
    children : 'Lorem ipsum',
    valueNow : Infinity,
  })

  t.is(elem.valueNow, Infinity)
  t.is(elem.toString(), '<div role="SpinButton" aria-valuenow="Infinity">Lorem ipsum</div>')

  elem.valueNow = 'Infinity'

  t.is(elem.valueNow, Infinity)
})

test('AriaValueNow: null', t => {
  const elem = RoleSpinButton.render({
    children : 'Lorem ipsum',
    valueNow : null,
  })

  t.is(elem.valueNow, null)
  t.is(elem.toString(), '<div role="SpinButton">Lorem ipsum</div>')

  elem.node.setAttribute('aria-valuenow', '')

  t.is(elem.valueNow, null)
})
