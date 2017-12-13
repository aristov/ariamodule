import { a, article, h1, section } from 'htmlmodule'
import { Checkbox } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Checkbox')),
        section([
            new Checkbox({ label : 'Simple' })
        ]),
        section([
            new Checkbox({
                label : 'Checked',
                checked : 'true'
            })
        ]),
        section([
            new Checkbox({
                label : 'Disabled',
                disabled : true
            })
        ]),
        section([
            new Checkbox({
                label : 'Checked and disabled',
                checked : 'true',
                disabled : true
            })
        ])
    ]
})
