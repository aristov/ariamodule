import { a, article, h1, section } from 'htmlmodule'
import { Textbox } from '../../lib/index'

article({
    parentNode : document.body,
    children : [
        h1(a('Textbox')),
        section([
            new Textbox({ label : 'Simple' })
        ]),
        section([
            new Textbox({
                label : 'Has placeholder',
                placeholder : 'Hint'
            })
        ]),
        section([
            new Textbox({
                label : 'Disabled',
                disabled : true
            })
        ])
    ]
})
