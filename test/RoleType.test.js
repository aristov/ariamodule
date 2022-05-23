const test = require('ava')
const { RoleButton, RoleArticle, RoleRegion } = require('..')

class ToggleButton extends RoleButton
{
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
  const instance = RoleButton.render('OK')
  t.is(instance.node.getAttribute('role'), 'Button')
  t.is(instance.toString(), '<div role="Button">OK</div>')
})

test('ToggleButton: className', t => {
  const instance = ToggleButton.render()
  t.is(instance.node.className, 'ToggleButton')
  t.is(instance.toString(), '<div role="Button" class="ToggleButton" aria-pressed="false">On</div>')
})

test('Article: setState', t => {
  const instance = Article.render()
  t.is(instance.toString(),
    '<div role="Article" class="Article"><div aria-pressed="false" role="Button" class="ToggleButton">On</div><div aria-expanded="false" role="Region"></div></div>')
  instance.toggle()
  t.is(instance.toString(),
    '<div role="Article" class="Article"><div aria-pressed="true" role="Button" class="ToggleButton">Off</div><div aria-expanded="true" role="Region"></div></div>')
})
