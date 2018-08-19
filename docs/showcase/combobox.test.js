import { a, article, h1, section } from 'htmlmodule'
import { ComboBox } from '../../lib'
import countrySuggest from './stub/countrysuggest'

article({
    parentNode : document.body,
    children : [
        h1(a('Combo box')),
        section([
            new ComboBox({
                label : 'Simple',
                options : countrySuggest.map(({ id, name }) => ({
                    value : id,
                    textContent : name
                }))
            })
        ])
    ]
})
