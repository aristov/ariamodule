import { a, article, h1, section } from 'htmlmodule'
import { TextBox, MultiTextBox } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Text box')),
        section([
            new TextBox({
                label : 'Simple',
                name : 'textbox-simple'
            })
        ]),
        section([
            new TextBox({
                label : 'Has placeholder',
                name : 'textbox-placeholder',
                placeholder : 'Hint'
            })
        ]),
        section([
            new TextBox({
                label : 'Read only',
                readOnly : true,
                name : 'textbox-simple'
            })
        ]),
        section([
            new TextBox({
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
        h1(a('Multi text box')),
        section([
            new MultiTextBox({
                label : 'Simple',
                name : 'textbox-multiline',
                multiline : true
            })
        ]),
        section([
            new MultiTextBox({
                label : 'Has placeholder',
                name : 'textbox-multiline-placeholder',
                placeholder : 'Hint',
                multiline : true
            })
        ]),
        section([
            new MultiTextBox({
                label : 'Disabled',
                name : 'textbox-multiline-disabled',
                disabled : true,
                multiline : true
            })
        ])
    ]
})
