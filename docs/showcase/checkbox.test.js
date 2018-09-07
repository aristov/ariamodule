import { a, article, h1, section } from 'htmlmodule'
import { CheckBox } from './ariamodule'

article({
    parentNode : document.body,
    children : [
        h1(a('Check box')),
        section([
            new CheckBox({
                name : 'checkbox-simple',
                children : 'Simple'
            })
        ]),
        section([
            new CheckBox({
                name : 'checkbox-checked',
                checked : true,
                children : 'Checked'
            })
        ]),
        section([
            new CheckBox({
                name : 'checkbox-mixed',
                checked : 'mixed',
                children : 'Mixed'
            })
        ]),
        section([
            new CheckBox({
                name : 'checkbox-readonly',
                readOnly : true,
                children : 'Read only'
            })
        ]),
        section([
            new CheckBox({
                name : 'checkbox-readonly',
                checked : true,
                readOnly : true,
                children : 'Checked read only'
            })
        ]),
        section([
            new CheckBox({
                name : 'checkbox-disabled',
                disabled : true,
                children : 'Disabled'
            })
        ]),
        section([
            new CheckBox({
                name : 'checkbox-checked-disabled',
                checked : true,
                disabled : true,
                children : 'Checked and disabled'
            })
        ])
    ]
})
