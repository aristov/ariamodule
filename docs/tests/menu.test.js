import { a, article, h1, p, section } from 'htmlmodule'
import {
    Button,
    Dialog,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuItemLink,
    AlertDialog,
} from '../../lib'

class CancelButton extends Button {
    activate() {
        const dialog = this.closest(Dialog)
        if(dialog) dialog.cancel()
    }
}

article({
    parentNode : document.body,
    children : [
        h1(a('Menu button')),
        section([
            new MenuButton({
                menu : new Menu([
                    new MenuItem('Menu item'),
                    new MenuItemLink({
                        href : '//yandex.ru',
                        children : 'Menu item link'
                    }),
                    new MenuItem({
                        onclick : ({ target }) => {
                            new AlertDialog({
                                trigger : MenuItem.prototype.getRole(target),
                                children : [
                                    new Heading('Dialog from menu'),
                                    p('This dialog demonstrates how to create a dialog from a popup menu.'),
                                    new Button('Ok'), ' ',
                                    new CancelButton('Cancel')
                                ]
                            })
                        },
                        children : 'Menu item dialog'
                    }),
                ]),
                children : 'Simple menu'
            })
        ])
    ]
})
