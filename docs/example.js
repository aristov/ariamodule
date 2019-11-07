import '../lib/debug'
import { ElementAssembler } from 'dommodule'
import {
    Form,
    Heading,
    Main,
    Paragraph,
    Role,
    RoleWidget,
    RoleTextBox,
    RoleButton
} from './ariamodule'

class Span extends ElementAssembler {
    static get localName() {
        return super.localName.toLowerCase()
    }

    static get namespace() {
        return 'http://www.w3.org/1999/xhtml'
    }
}

class Div extends Span {}

class TextBox extends RoleTextBox {
    create(init) {
        super.create(init)
        this.node.contentEditable = true
        this.on('keydown', event => {
            if(event.key === 'Enter') {
                event.preventDefault()
                this.form.emit('submit')
            }
        })
    }
}

class Button extends RoleButton {
    create(init) {
        super.create(init)
        this.node.tabIndex = 0
        this.on('click', event => this.form.emit('submit'))
        this.on('keydown', event => {
            if([' ', 'Enter'].includes(event.key)) {
                this.node.click()
            }
        })
    }
}

Role.elementAssembler = Div
RoleWidget.elementAssembler = Span

let label, textBox

new Main({
    parentNode : document.body,
    children : [
        new Heading('Hello world!'),
        new Paragraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
        new Form({
            onsubmit : event => location.search = '?name=' + textBox.value,
            children : [
                label = new Span('Name'),
                textBox = new TextBox({
                    labelledBy : label,
                    children : (new URL(location)).searchParams.get('name') || ' '
                }),
                new Button('Confirm!')
            ]
        })
    ]
})
