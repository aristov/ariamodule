import { a, article, h1, section } from 'htmlmodule'
import { button } from '../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Button')),
        section([
            button('Simple')
        ]),
        section([
            button({
                pressed : 'true',
                children : 'Pressed toggle button'
            })
        ]),
        section([
            button({
                disabled : true,
                children : 'Disabled'
            })
        ]),
        section([
            button({
                pressed : true,
                disabled : true,
                children : 'Pressed disabled toggle button'
            })
        ])
    ]
})
