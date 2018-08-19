import { a, article, h1, section } from 'htmlmodule'
import { Combobox } from '../../lib'
import countrySuggest from './stub/countrysuggest'

article({
    parentNode : document.body,
    children : [
        h1(a('Combobox')),
        section([
            new Combobox({
                label : 'Simple',
                options : countrySuggest.map(({ id, name }) => ({
                    value : id,
                    textContent : name
                }))
            })
        ])
    ]
})
