import { a, article, h1, label, section } from 'htmlmodule'
import { ComboBox, Option } from './ariamodule'
import suggest from './stub/suggest'

article({
    parentNode : document.body,
    children : [
        h1(a('Combo box')),
        section([
            new ComboBox({
                label : label('Simple'),
                options : suggest.map(name => new Option(name))
            })
        ]),
        section([
            new ComboBox({
                label : label('Autocomplete list'),
                autoComplete : 'list',
                options : suggest.map((name, i) => new Option({
                    value : 'item' + i,
                    children : name
                }))
            })
        ]),
        section([
            new ComboBox({
                label : label('Disabled'),
                disabled : true,
                options : suggest.map(name => new Option(name))
            })
        ])
    ]
})
