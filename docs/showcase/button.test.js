import { a, article, h1, section } from 'htmlmodule'
import { Button } from '../../lib/index'

article({
    parentNode : document.body,
    children : [
        h1(a('Button')),
        section([
            new Button('Simple')
        ]),
        section([
            new Button({
                pressed : true,
                children : 'Pressed toggle button'
            })
        ]),
        section([
            new Button({
                disabled : true,
                children : 'Disabled'
            })
        ]),
        section([
            new Button({
                pressed : true,
                disabled : true,
                children : 'Pressed and disabled'
            })
        ])
    ]
})
