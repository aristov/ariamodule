import { a, article, h1, h3, section } from 'htmlmodule'
import { button, dialog } from '../../lib/index'

const $button = button({
    onclick : () => {
        const $dialog = $button.controls[0]
        if($dialog) $dialog.remove()
        else {
            const _dialog = dialog({
                // parentNode : _button.parentNode,
                trigger : $button,
                assertive : true,
                children : [
                    h3('Dialog title'),
                    button('Close')
                ]
            })
            $button.ownerElement.node.after(_dialog.ownerElement.node)
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
