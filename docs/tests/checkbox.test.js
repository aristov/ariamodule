// import { form, input, label } from 'htmlmodule'
import { a, article, h1, section } from 'htmlmodule'
import { Checkbox } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Checkbox')),
        section([
            new Checkbox({
                label : 'Simple',
                name : 'checkbox-simple',
            })
        ]),
        section([
            new Checkbox({
                label : 'Checked',
                name : 'checkbox-checked',
                checked : 'true',
            })
        ]),
        section([
            new Checkbox({
                label : 'Read only',
                readOnly : true,
                name : 'checkbox-readonly',
            })
        ]),
        section([
            new Checkbox({
                label : 'Checked read only',
                checked : 'true',
                readOnly : true,
                name : 'checkbox-readonly',
            })
        ]),
        section([
            new Checkbox({
                label : 'Disabled',
                name : 'checkbox-disabled',
                disabled : true
            })
        ]),
        section([
            new Checkbox({
                label : 'Checked and disabled',
                name : 'checkbox-checked-disabled',
                checked : 'true',
                disabled : true
            })
        ])
    ]
})

/*article({
    parentNode : document.body,
    children : form([
        h1('Native checkbox'),
        section([
            label([
                input({
                    type : 'checkbox',
                    name : 'checkbox-no-value',
                }),
                'Native checkbox'
            ])
        ]),
        section([
            label([
                input({
                    type : 'checkbox',
                    name : 'checkbox-has-value',
                    value : 'test',
                    checked : true
                }),
                'Native checkbox'
            ])
        ])
    ])
})*/
