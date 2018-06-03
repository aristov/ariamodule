import { a, article, h1, kbd, p, section } from 'htmlmodule'
import { AlertDialog, Button, Dialog, Heading } from '../../lib'

class CancelButton extends Button {
    activate() {
        this.closest(Dialog).expanded = false
    }
}

let dialog

article({
    parentNode : document.body,
    children : [
        h1(a('Dialog')),
        section([
            new Button({
                controls : dialog = new Dialog([
                    new Heading('Static dialog'),
                    p('This is a simple dialog.'),
                    p(['It closes on the ', kbd('Escape'), ' key press or an outside click.']),
                    new Button('Ok'),
                    new CancelButton('Cancel')
                ]),
                children : 'Show dialog'
            }),
        ]),
        section([
            new Button({
                controls : new Dialog([
                    new Heading('Appended dialog'),
                    p('This is a simple dialog.'),
                    p(['It closes on the ', kbd('Escape'), ' key press or an outside click.']),
                    new Button('Ok'),
                    new CancelButton('Cancel')
                ]),
                children : 'Append dialog'
            })
        ]),
        section([
            new Button({
                onclick : ({ target }) => {
                    const btn = Button.getRoleOf(target)
                    if(!btn.controls.length) {
                        btn.controls = new Dialog({
                            expanded : true,
                            content : [
                                new Heading('Created dialog'),
                                p('This is a simple dialog.'),
                                p(['It closes on the ', kbd('Escape'), ' key press or an outside click.']),
                                new Button('Ok'),
                                new CancelButton('Cancel')
                            ]
                        })
                    }
                },
                hasPopup : 'dialog',
                children : 'Create dialog'
            })
        ]),
        section([
            new Button({
                onclick : ({ target }) => {
                    const btn = Button.getRoleOf(target)
                    if(!btn.controls.length) {
                        btn.controls = new Dialog({
                            oncancel : event => event.preventDefault(),
                            // oncancel : event => false, // todo
                            expanded : true,
                            content : [
                                new Heading('Assertive dialog'),
                                p('This dialog is assertive.'),
                                p(['It doesn\'t close on the ', kbd('Escape'), ' key press or an outside click.']),
                                new Button('Ok'),
                                new CancelButton('Cancel')
                            ]
                        })
                    }
                },
                hasPopup : 'dialog',
                children : 'Create assertive dialog'
            })
        ]),
        dialog,
        section([
            new Button({
                controls : new Dialog({
                    parentNode : document.body,
                    modal : true,
                    content : [
                        new Heading('Static modal dialog'),
                        p('This is a simple dialog.'),
                        p(['It closes on the ', kbd('Escape'), ' key press or an outside click.']),
                        new Button('Ok'),
                        new CancelButton('Cancel')
                    ]
                }),
                children : 'Show modal dialog'
            })
        ]),
        section([
            new Button({
                controls : new Dialog({
                    modal : true,
                    content : [
                        new Heading('Appended modal dialog'),
                        p('This is a simple dialog.'),
                        p(['It closes on the ', kbd('Escape'), ' key press or an outside click.']),
                        new Button('Ok'),
                        new CancelButton('Cancel')
                    ]
                }),
                children : 'Append modal dialog'
            })
        ]),
        section([
            new Button({
                onclick : ({ target }) => {
                    const btn = Button.getRoleOf(target)
                    if(!btn.controls.length) {
                        btn.controls = new Dialog({
                            modal : true,
                            expanded : true,
                            content : [
                                new Heading('Created modal dialog'),
                                p('This is a simple modal dialog.'),
                                p(['It is modal, but it closes on the ', kbd('Escape'), ' key press or an outside click.']),
                                new Button('Ok'),
                                new CancelButton('Cancel')
                            ]
                        })
                    }
                },
                hasPopup : 'dialog',
                children : 'Create modal dialog'
            })
        ]),
        section([
            new Button({
                onclick : ({ target }) => {
                    const btn = Button.getRoleOf(target)
                    if(!btn.controls.length) {
                        btn.controls = new Dialog({
                            oncancel : event => event.preventDefault(),
                            modal : true,
                            expanded : true,
                            content : [
                                new Heading('Assertive modal dialog'),
                                p('This modal dialog is assertive.'),
                                p(['It doesn\'t close on the ', kbd('Escape'), ' key press or an outside click.']),
                                new Button('Ok'),
                                new CancelButton('Cancel')
                            ]
                        })
                    }
                },
                hasPopup : 'dialog',
                children : 'Create assertive modal dialog'
            })
        ])
    ]
})
