import { a, article, h1, kbd, p, section } from 'htmlmodule'
import { Button, Dialog, Heading, AlertDialog } from '../../lib'

class CancelButton extends Button {
    activate() {
        const dialog = this.closest(Dialog)
        if(dialog) dialog.cancel()
    }
}

article({
    parentNode : document.body,
    children : [
        h1(a('Dialog')),
        section([
            new Button({
                onclick : ({ target }) => {
                    const btn = Button.prototype.getRoleOf(target)
                    const dlg = btn.controls[0]
                    if(dlg) dlg.remove()
                    else {
                        btn.after(new Dialog({
                            trigger : btn,
                            children : [
                                new Heading('Dialog'),
                                p('This is a simple dialog.'),
                                p(['It closes on the ', kbd('Escape'), ' key press or an outside click.']),
                                new Button('Ok'), ' ',
                                new CancelButton('Cancel')
                            ]
                        }))
                    }
                },
                expanded : 'false',
                children : 'Simple dialog'
            })
        ]),
        section([
            new Button({
                onclick : ({ target }) => {
                    const btn = Button.prototype.getRoleOf(target)
                    const dlg = btn.controls[0]
                    if(dlg) dlg.remove()
                    else {
                        btn.after(new Dialog({
                            trigger : btn,
                            assertive : true,
                            children : [
                                new Heading('Assertive dialog'),
                                p('This dialog is assertive.'),
                                p(['It doesn\'t close on the ', kbd('Escape'), ' key press or an outside click.']),
                                new Button('Ok'), ' ',
                                new CancelButton('Cancel')
                            ]
                        }))
                    }
                },
                expanded : 'false',
                children : 'Assertive dialog'
            })
        ]),
        section([
            new Button({
                onclick : ({ target }) => {
                    new AlertDialog({
                        trigger : Button.prototype.getRoleOf(target),
                        children : [
                            new Heading('Alert dialog'),
                            p('This is a simple alert dialog.'),
                            p(['It is modal, but it closes on the ', kbd('Escape'), ' key press or an outside click.']),
                            new Button('Ok'), ' ',
                            new CancelButton('Cancel')
                        ]
                    })
                },
                expanded : 'false',
                children : 'Alert dialog'
            })
        ]),
        section([
            new Button({
                onclick : ({ target }) => {
                    new AlertDialog({
                        trigger : Button.prototype.getRoleOf(target),
                        assertive : true,
                        children : [
                            new Heading('Assertive alert dialog'),
                            p('This modal dialog is assertive.'),
                            p(['It doesn\'t close on the ', kbd('Escape'), ' key press or an outside click.']),
                            new Button('Ok'), ' ',
                            new CancelButton('Cancel')
                        ]
                    })
                },
                expanded : 'false',
                children : 'Assertive alert dialog'
            })
        ])
    ]
})
