const test = require('ava')
const { RoleArticle, RoleButton, RoleRegion, RoleWidget } = require('..')

class Button extends RoleWidget
{
  static role = 'Button'
}

class TextInputBox extends RoleWidget
{
  static role = null
}

class ToggleButton extends RoleButton
{
  static tagName = 'span'

  render() {
    if(!this.props.pressed) {
      this.pressed = 'false'
    }
    return this.props.pressed ? 'Off' : 'On'
  }
}

class Article extends RoleArticle
{
  state = { expanded : false }

  render() {
    return [
      this._button = new ToggleButton({
        pressed : this.state.expanded,
        onclick : this.onClick,
      }),
      new RoleRegion({ expanded : this.state.expanded }),
    ]
  }

  onClick = () => this.setState({ expanded : !this.state.expanded })

  toggle() {
    this._button.click()
  }
}

test('RoleButton: role', t => {
  const elem = RoleButton.render('OK')

  t.is(elem.node.getAttribute('role'), 'Button')
  t.is(elem.toString(), '<div role="Button">OK</div>')
})

test('Button: role', t => {
  const elem = Button.render('OK')

  t.is(elem.node.getAttribute('role'), 'Button')
  t.is(elem.toString(), '<div role="Button" class="Button">OK</div>')
})

test('TextInputBox: role', t => {
  const elem = TextInputBox.render()

  t.is(elem.node.getAttribute('role'), null)
  t.is(elem.toString(), '<div class="TextInputBox"></div>')
})

test('RoleWidget: role', t => {
  const elem = RoleWidget.render({ role : 'Link' })

  t.is(elem.node.getAttribute('role'), 'Link')
  t.is(elem.toString(), '<div role="Link"></div>')
})

test('ToggleButton: className', t => {
  const elem = ToggleButton.render()

  t.is(elem.node.className, 'ToggleButton')
  t.is(elem.toString(), '<span role="Button" class="ToggleButton" aria-pressed="false">On</span>')
})

test('Article: setState', t => {
  const elem = Article.render()

  t.is(elem.toString(),
    '<div role="Article" class="Article"><span role="Button" class="ToggleButton" aria-pressed="false">On</span><div role="Region" aria-expanded="false"></div></div>')

  elem.toggle()

  t.is(elem.toString(),
    '<div role="Article" class="Article"><span role="Button" class="ToggleButton" aria-pressed="true">Off</span><div role="Region" aria-expanded="true"></div></div>')
})
