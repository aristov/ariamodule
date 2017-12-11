import { a, article, h1, section } from 'htmlmodule'
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
                    new MenuItem('Simple menu item'),
                    new MenuItemLink({
                        href : '//yandex.ru',
                        children : 'Menu item link'
                    }),
                    new MenuItem({
                        onclick : ({ target }) => {
                            new AlertDialog({
                                trigger : MenuItem.getInstance(target.attributes.role),
                                children : [
                                    new Heading('Modal dialog title'),
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
