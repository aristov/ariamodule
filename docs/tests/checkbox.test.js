import { a, article, h1, section } from 'htmlmodule'
import { Checkbox } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Checkbox')),
        section([
            new Checkbox('Simple')
        ]),
        section([
            new Checkbox({
                checked : 'true',
                children : 'Checked'
            })
        ]),
        section([
            new Checkbox({
                disabled : true,
                children : 'Disabled'
            })
        ]),
        section([
            new Checkbox({
                checked : 'true',
                disabled : true,
                children : 'Checked and disabled'
            })
        ])
    ]
})
