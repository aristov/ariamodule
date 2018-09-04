import { a, article, h1, p, section } from 'htmlmodule'
import {
    Button,
    Dialog,
    Heading,
    Group,
    Menu,
    MenuBar,
    MenuButton,
    MenuItem,
    MenuItemCheckBox,
    MenuItemRadio,
    MenuItemLink,
    Separator
} from './ariamodule'

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
                        children : 'Follow link',
                        href : '//yandex.ru',
                        target : '_blank'
                    }),
                    new MenuItem({
                        children : 'Open dialog...',
                        hasPopup : 'dialog',
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
                        }
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
                new MenuItem({
                    children : 'Mixed menu',
                    controls : new Menu([
                        new MenuItemCheckBox('Check item'),
                        new Separator,
                        new MenuItem({
                            children : 'Nested submenu',
                            controls : new Menu([
                                new MenuItemRadio('First radio item'),
                                new MenuItemRadio('Second radio item'),
                                new MenuItemRadio('Third radio item')
                            ])
                        }),
                        new MenuItem({
                            children : 'Follow link',
                            ownerElement : a({
                                href : '//www.w3.org/TR/wai-aria/#menu',
                                target : '_blank'
                            })
                        }),
                        new Separator,
                        new Group([
                            new MenuItemRadio('First radio'),
                            new MenuItemRadio('Second radio')
                        ]),
                        new Separator,
                        new MenuItem({
                            children : 'Open dialog...',
                            hasPopup : 'dialog',
                            onclick : event => {
                                new Dialog({
                                    modal : true,
                                    expanded : true,
                                    trigger : event.target,
                                    content : [
                                        new Heading('Dialog from menu'),
                                        p('This dialog demonstrates how to create a dialog from a popup menu.'),
                                        new Button('Ok'), ' ',
                                        new CancelButton('Cancel')
                                    ]
                                })
                            }
                        })
                    ])
                }),
                new MenuItem({
                    children : 'Check menu',
                    controls : new Menu([
                        new MenuItemCheckBox('First check item'),
                        new MenuItemCheckBox({
                            checked : true,
                            children : 'Second check item'
                        }),
                        new MenuItemCheckBox('Third check item')
                    ])
                }),
                new MenuItem({
                    children : 'Radio menu groups',
                    controls : new Menu([
                        new Group([
                            new MenuItemRadio('First group - radio one'),
                            new MenuItemRadio('First group - radio two')
                        ]),
                        new Separator,
                        new Group([
                            new MenuItemRadio({
                                checked : true,
                                children : 'Second group - radio one'
                            }),
                            new MenuItemRadio('Second group - radio two')
                        ])
                    ])
                })
            ])
        ])
    ]
})
