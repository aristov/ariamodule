import { a, article, h1, p, section } from 'htmlmodule'
import {
    Button,
    Dialog,
    Heading,
    Menu,
    MenuBar,
    MenuButton,
    MenuItem,
    MenuItemLink,
    Dialog,
} from '../../lib'

class CancelButton extends Button {
    activate() {
        this.closest(Dialog).expanded = false
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
                        target : '_blank',
                        children : 'Follow link'
                    }),
                    new MenuItem({
                        onclick : ({ target }) => {
                            new Dialog({
                                modal : true,
                                expanded : true,
                                trigger : target,
                                content : [
                                    new Heading('Dialog from menu'),
                                    p('This dialog demonstrates how to create a dialog from a popup menu.'),
                                    new Button('Ok'), ' ',
                                    new CancelButton('Cancel')
                                ]
                            })
                        },
                        hasPopup : 'dialog',
                        children : 'Show dialog...'
                    }),
                ]),
                children : 'Simple menu'
            })
        ])
    ]
})

article({
    parentNode : document.body,
    children : [
        h1(a('Menu bar')),
        section([
            new MenuBar([
                new MenuItem('Menu item'),
                new MenuItem({
                    ownerElement : a({
                        href : '//yandex.ru',
                        target : '_blank'
                    }),
                    children : 'Follow link'
                }),
                new MenuItem({
                    onclick : ({ target }) => {
                        new Dialog({
                            modal : true,
                            expanded : true,
                            trigger : target,
                            content : [
                                new Heading('Dialog from menu'),
                                p('This dialog demonstrates how to create a dialog from a popup menu.'),
                                new Button('Ok'), ' ',
                                new CancelButton('Cancel')
                            ]
                        })
                    },
                    hasPopup : 'dialog',
                    children : 'Show dialog...'
                }),
            ])
        ])
    ]
})
