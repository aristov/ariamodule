import { a, article, h1, section } from 'htmlmodule'
import { Checkbox } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Checkbox')),
        section([
            new Checkbox({
                name : 'checkbox-simple',
                children : 'Simple'
            })
        ]),
        section([
            new Checkbox({
                name : 'checkbox-checked',
                checked : true,
                children : 'Checked'
            })
        ]),
        section([
            new Checkbox({
                name : 'checkbox-readonly',
                readOnly : true,
                children : 'Read only'
            })
        ]),
        section([
            new Checkbox({
                name : 'checkbox-readonly',
                checked : true,
                readOnly : true,
                children : 'Checked read only'
            })
        ]),
        section([
            new Checkbox({
                name : 'checkbox-disabled',
                disabled : true,
                children : 'Disabled'
            })
        ]),
        section([
            new Checkbox({
                name : 'checkbox-checked-disabled',
                checked : true,
                disabled : true,
                children : 'Checked and disabled'
            })
        ])
    ]
})
