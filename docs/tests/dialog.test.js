import { a, article, h1, section } from 'htmlmodule'
import { Button, Dialog, Heading, ModalDialog } from '../../lib'

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
                    const btn = Button.getInstance(target.attributes.role)
                    const dlg = btn.controls[0]
                    if(dlg) dlg.remove()
                    else {
                        btn.after(new Dialog({
                            trigger : btn,
                            children : [
                                new Heading('Dialog title'),
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
                    new ModalDialog({
                        trigger : Button.getInstance(target.attributes.role),
                        children : [
                            new Heading('Modal dialog title'),
                            new Button('Ok'), ' ',
                            new CancelButton('Cancel')
                        ]
                    })
                },
                expanded : 'false',
                children : 'Modal dialog'
            })
        ])
    ]
})
