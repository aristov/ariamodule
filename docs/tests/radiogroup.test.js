import { a, article, h1, section } from 'htmlmodule'
import { radioGroup, radio } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Checkbox')),
        section([
            radioGroup({
                label : 'Simple',
                children : [
                    radio({ value : '1', children : 'First' }),
                    radio({ value : '2', children : 'Second' }),
                    radio({ value : '3', children : 'Third' })
                ]
            })
        ]),
        section([
            radioGroup({
                label : 'Checked',
                children : [
                    radio({ value : '1', children : 'First' }),
                    radio({
                        value : '2',
                        checked : 'true',
                        children : 'Second'
                    }),
                    radio({ value : '3', children : 'Third' })
                ]
            })
        ]),
        section([
            radioGroup({
                label : 'Disabled',
                disabled : true,
                children : [
                    radio({ value : '1', children : 'First' }),
                    radio({ value : '2', children : 'Second' }),
                    radio({
                        value : '3',
                        checked : 'true',
                        children : 'Third'
                    })
                ]
            })
        ])
    ]
})
