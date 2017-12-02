import { a, article, h1, h3, section } from 'htmlmodule'
import { Button, Dialog, button, dialog } from '../../lib/index'

class CancelButton extends Button {
    activate() {
        const dialog = this.closest(Dialog)
        // console.log(dialog)
        if(dialog) dialog.cancel()
    }
}

const $button = button({
    onclick : () => {
        const $dialog = $button.controls[0]
        if($dialog) $dialog.remove()
        else {
            const _dialog = dialog({
                // parentNode : _button.parentNode,
                trigger : $button,
                children : [
                    h3('Dialog title'),
                    new CancelButton('Cancel')
                ]
            })
            $button.after(_dialog)
        }
    },
    children : 'Simple dialog'
})

article({
    parentNode : document.body,
    children : [
        h1(a('Dialog')),
        section($button),
        section(button('Assertive dialog'))
    ]
})
