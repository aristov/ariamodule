import { a, article, h1, section } from 'htmlmodule'
import { Textbox, MultiTextbox } from '../../lib'

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

article({
    parentNode : document.body,
    children : [
        h1(a('Multi textbox')),
        section([
            new MultiTextbox({
                label : 'Simple',
                multiline : true
            })
        ]),
        section([
            new MultiTextbox({
                label : 'Has placeholder',
                placeholder : 'Hint',
                multiline : true
            })
        ]),
        section([
            new MultiTextbox({
                label : 'Disabled',
                disabled : true,
                multiline : true
            })
        ])
    ]
})
