import { a, article, h1, section } from 'htmlmodule'
import { checkbox } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Checkbox')),
        section([
            checkbox('Simple')
        ]),
        section([
            checkbox({
                checked : 'true',
                children : 'Checked'
            })
        ]),
        section([
            checkbox({
                disabled : true,
                children : 'Disabled'
            })
        ]),
        section([
            checkbox({
                checked : 'true',
                disabled : true,
                children : 'Checked and disabled'
            })
        ])
    ]
})
