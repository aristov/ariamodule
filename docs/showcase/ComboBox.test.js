import { a, article, h1, label, section } from 'htmlmodule'
import { ComboBox } from './ariamodule'
import countrySuggest from './stub/countrysuggest'

article({
    parentNode : document.body,
    children : [
        h1(a('Combo box')),
        section([
            new ComboBox({
                label : label('Simple'),
                options : countrySuggest.map(({ id, name }) => ({
                    value : id,
                    textContent : name
                }))
            })
        ]),
        section([
            new ComboBox({
                label : label('Disabled'),
                disabled : true,
                options : countrySuggest.map(({ id, name }) => ({
                    value : id,
                    textContent : name
                }))
            })
        ])
    ]
})
