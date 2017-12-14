import { a, article, h1, section } from 'htmlmodule'
import { Textbox, MultiTextbox } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Textbox')),
        section([
            new Textbox({
                label : 'Simple',
                name : 'textbox-simple'
            })
        ]),
        section([
            new Textbox({
                label : 'Has placeholder',
                name : 'textbox-placeholder',
                placeholder : 'Hint'
            })
        ]),
        section([
            new Textbox({
                label : 'Disabled',
                name : 'textbox-disabled',
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
                name : 'textbox-multiline',
                multiline : true
            })
        ]),
        section([
            new MultiTextbox({
                label : 'Has placeholder',
                name : 'textbox-multiline-placeholder',
                placeholder : 'Hint',
                multiline : true
            })
        ]),
        section([
            new MultiTextbox({
                label : 'Disabled',
                name : 'textbox-multiline-disabled',
                disabled : true,
                multiline : true
            })
        ])
    ]
})
