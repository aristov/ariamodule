const test = require('ava')
const { RoleButton } = require('..')

class ToggleButton extends RoleButton
{
  state = { pressed : false }

  render() {
    this.onclick = this.onClick
    this.pressed = this.state.pressed
    return this.props.children
  }

  onClick = () => this.setState({ pressed : !this.state.pressed })
}

test('role', t => {
  const instance = RoleButton.render('Toggle')
  t.is(instance.node.getAttribute('role'), 'Button')
  t.is(instance.toString(), '<div role="Button">Toggle</div>')
})

test('className', t => {
  const instance = ToggleButton.render('Toggle')
  t.is(instance.node.className, 'ToggleButton')
  t.is(instance.toString(), '<div role="Button" class="ToggleButton" aria-pressed="false">Toggle</div>')
})

test('setState', t => {
  const instance = ToggleButton.render({
    text : 'Toggle',
    pressed : false,
  })
  t.is(instance.pressed, false)
  instance.click()
  t.is(instance.pressed, true)
  t.is(instance.toString(), '<div aria-pressed="true" role="Button" class="ToggleButton">Toggle</div>')
})
