import { a, article, h1, p, section } from 'htmlmodule'
import {
    Button,
    Dialog,
    Heading,
    Group,
    Menu,
    MenuBar,
    MenuItem,
    MenuItemCheckBox,
    MenuItemRadio,
    MenuItemLink,
    Navigation,
    Separator
} from './ariamodule'

class CancelButton extends Button {
    activate() {
        this.closest(Dialog).expanded = false
    }
}

function openDialog(event) {
    new Dialog({
        modal : true,
        expanded : true,
        trigger : event.target,
        content : [
            new Heading('Dialog from menu'),
            p('This dialog demonstrates how to create a dialog from a menu.'),
            new Button('Ok'), ' ',
            new CancelButton('Cancel')
        ]
    })
}

article({
    parentNode : document.body,
    children : [
        h1(a('Menu button')),
        section([
            new Button({
                controls : complexMenu(),
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
            h1(a('Simple')),
            new MenuBar([
                new MenuItem('Menu item'),
                new MenuItem({
                    disabled : true,
                    children : 'Disabled item'
                }),
                new MenuItem({
                    hasPopup : 'dialog',
                    onclick : openDialog,
                    children : 'Open dialog...'
                })
            ])
        ]),
        section([
            h1(a('Navigation')),
            new Navigation([
                new MenuBar([
                    new MenuItemLink({
                        href : 'http://w3.org/TR/dom/',
                        target : '_blank',
                        children : 'DOM spec'
                    }),
                    new MenuItemLink({
                        href : 'http://w3.org/TR/html/',
                        target : '_blank',
                        children : 'HTML spec'
                    }),
                    new MenuItemLink({
                        href : 'https://www.w3.org/TR/wai-aria-1.1/',
                        target : '_blank',
                        children : 'WAI-ARIA spec'
                    })
                ])
            ])
        ]),
        section([
            h1(a('Complex')),
            complexMenuBar()
        ]),
        section([
            h1(a('Vertical')),
            complexMenuBar('vertical')
        ])
    ]
})

function complexMenu() {
    return new Menu([
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
            disabled : true,
            children : 'Disabled item'
        }),
        new MenuItem({
            children : 'Open dialog...',
            hasPopup : 'dialog',
            onclick : openDialog
        })
    ])
}

function complexMenuBar(orientation) {
    return new MenuBar({
        orientation,
        children : [
            new MenuItem({
                children : 'Mixed menu',
                controls : complexMenu()
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
                children : 'Radio groups',
                controls : new Menu([
                    new Group([
                        new MenuItemRadio({
                            disabled : true,
                            children : 'First group - radio one'
                        }),
                        new MenuItemRadio('First group - radio two'),
                        new MenuItemRadio('First group - radio three')
                    ]),
                    new Separator,
                    new Group([
                        new MenuItemRadio({
                            checked : true,
                            children : 'Second group - radio one'
                        }),
                        new MenuItemRadio('Second group - radio two'),
                        new MenuItemRadio({
                            disabled : true,
                            children : 'Second group - radio three'
                        })
                    ])
                ])
            })
        ]
    })
}
