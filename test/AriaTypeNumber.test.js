const test = require('ava')
const { RoleSpinButton } = require('..')

test('AriaValueNow: 0', t => {
  const instance = RoleSpinButton.render({
    text : 'Lorem ipsum',
    valueNow : .0,
  })
  t.is(instance.valueNow, 0)
  t.is(instance.toString(), '<div aria-valuenow="0" role="SpinButton">Lorem ipsum</div>')

  instance.valueNow = .0e-1
  t.is(instance.valueNow, 0)

  instance.valueNow = ''
  t.is(instance.valueNow, 0)

  instance.valueNow = '.0'
  t.is(instance.valueNow, 0)

  instance.valueNow = '.0e-1'
  t.is(instance.valueNow, 0)

  instance.valueNow = []
  t.is(instance.valueNow, 0)

  instance.valueNow = [.0]
  t.is(instance.valueNow, 0)

  instance.valueNow = ['.0e-1']
  t.is(instance.valueNow, 0)

  instance.valueNow = false
  t.is(instance.valueNow, 0)

  instance.node.setAttribute('aria-valuenow', '.0')
  t.is(instance.valueNow, 0)

  instance.node.setAttribute('aria-valuenow', '.0e-1')
  t.is(instance.valueNow, 0)

  instance.node.setAttribute('aria-valuenow', '')
  t.is(instance.valueNow, 0)
})

test('AriaValueNow: 1', t => {
  const instance = RoleSpinButton.render({
    text : 'Lorem ipsum',
    valueNow : 1,
  })
  t.is(instance.valueNow, 1)
  t.is(instance.toString(), '<div aria-valuenow="1" role="SpinButton">Lorem ipsum</div>')

  instance.valueNow = .1e1
  t.is(instance.valueNow, 1)

  instance.valueNow = '1'
  t.is(instance.valueNow, 1)

  t.is(instance.valueNow, 1)

  instance.valueNow = '.1e1'
  t.is(instance.valueNow, 1)

  instance.valueNow = [1]
  t.is(instance.valueNow, 1)

  instance.valueNow = ['.1e1']
  t.is(instance.valueNow, 1)

  instance.valueNow = true
  t.is(instance.valueNow, 1)

  instance.node.setAttribute('aria-valuenow', '1')
  t.is(instance.valueNow, 1)

  instance.node.setAttribute('aria-valuenow', '.1e1')
  t.is(instance.valueNow, 1)
})

test('AriaValueNow: 4.2', t => {
  const instance = RoleSpinButton.render({
    text : 'Lorem ipsum',
    valueNow : 4.2,
  })
  t.is(instance.valueNow, 4.2)
  t.is(instance.toString(), '<div aria-valuenow="4.2" role="SpinButton">Lorem ipsum</div>')

  instance.valueNow = 42e-1
  t.is(instance.valueNow, 4.2)

  instance.valueNow = '4.2'
  t.is(instance.valueNow, 4.2)

  instance.valueNow = '42e-1'
  t.is(instance.valueNow, 4.2)

  instance.valueNow = [4.2]
  t.is(instance.valueNow, 4.2)

  instance.valueNow = ['4.2']
  t.is(instance.valueNow, 4.2)

  instance.node.setAttribute('aria-valuenow', '4.2')
  t.is(instance.valueNow, 4.2)

  instance.node.setAttribute('aria-valuenow', '42e-1')
  t.is(instance.valueNow, 4.2)
})

test('AriaValueNow: NaN', t => {
  const instance = RoleSpinButton.render({
    text : 'Lorem ipsum',
    valueNow : NaN,
  })
  t.is(instance.valueNow, NaN)
  t.is(instance.toString(), '<div aria-valuenow="NaN" role="SpinButton">Lorem ipsum</div>')

  instance.valueNow = 'NaN'
  t.is(instance.valueNow, NaN)

  instance.valueNow = 'xyz'
  t.is(instance.valueNow, NaN)

  instance.valueNow = {}
  t.is(instance.valueNow, NaN)

  instance.valueNow = [.0, 4.2, 1.1]
  t.is(instance.valueNow, NaN)

  instance.valueNow = function() {}
  t.is(instance.valueNow, NaN)

  instance.valueNow = undefined
  t.is(instance.valueNow, NaN)

  instance.node.setAttribute('aria-valuenow', 'true')
  t.is(instance.valueNow, NaN)

  instance.node.setAttribute('aria-valuenow', 'false')
  t.is(instance.valueNow, NaN)

  instance.node.setAttribute('aria-valuenow', 'undefined')
  t.is(instance.valueNow, NaN)

  instance.node.setAttribute('aria-valuenow', 'xyz')
  t.is(instance.valueNow, NaN)
})

test('AriaValueNow: Infinity', t => {
  const instance = RoleSpinButton.render({
    text : 'Lorem ipsum',
    valueNow : Infinity,
  })
  t.is(instance.valueNow, Infinity)
  t.is(instance.toString(), '<div aria-valuenow="Infinity" role="SpinButton">Lorem ipsum</div>')

  instance.valueNow = 'Infinity'
  t.is(instance.valueNow, Infinity)
})

test('AriaValueNow: null', t => {
  const instance = RoleSpinButton.render({
    text : 'Lorem ipsum',
    valueNow : null,
  })
  t.is(instance.valueNow, null)
  t.is(instance.toString(), '<div role="SpinButton">Lorem ipsum</div>')
})
