import { a, article, h1, section } from 'htmlmodule'
import { Switch } from './ariamodule'

article({
    parentNode : document.body,
    children : [
        h1(a('Switch')),
        section([
            new Switch({
                name : 'switch-simple',
                children : 'Simple'
            })
        ]),
        section([
            new Switch({
                name : 'switch-checked',
                checked : true,
                children : 'Checked'
            })
        ]),
        section([
            new Switch({
                name : 'switch-readonly',
                readOnly : true,
                children : 'Read only'
            })
        ]),
        section([
            new Switch({
                name : 'switch-readonly',
                checked : true,
                readOnly : true,
                children : 'Checked read only'
            })
        ]),
        section([
            new Switch({
                name : 'switch-disabled',
                disabled : true,
                children : 'Disabled'
            })
        ]),
        section([
            new Switch({
                name : 'switch-checked-disabled',
                checked : true,
                disabled : true,
                children : 'Checked and disabled'
            })
        ])
    ]
})
