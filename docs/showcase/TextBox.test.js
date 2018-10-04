import { a, article, h1, label, section } from 'htmlmodule'
import { TextBox } from './ariamodule'

article({
    parentNode : document.body,
    children : [
        h1(a('Text box')),
        section([
            new TextBox({
                label : label('Simple'),
                name : 'textbox-simple'
            })
        ]),
        section([
            new TextBox({
                label : label('With placeholder'),
                name : 'textbox-placeholder',
                placeholder : 'Hint'
            })
        ]),
        /*section([
            new TextBox({
                label : label('Multiline'),
                name : 'textbox-multiLine',
                multiLine : true
            })
        ]),*/
        section([
            new TextBox({
                label : label('Read only'),
                name : 'textbox-simple',
                readOnly : true
            })
        ]),
        section([
            new TextBox({
                label : label('Disabled'),
                name : 'textbox-disabled',
                disabled : true
            })
        ])
    ]
})
