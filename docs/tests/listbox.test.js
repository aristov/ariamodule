import { a, article, h1, section } from 'htmlmodule'
import { Listbox, Option } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Listbox')),
        section([
            new Listbox({
                label : 'Simple',
                children : [
                    new Option({ value : '1', children : 'First option' }),
                    new Option({ value : '2', children : 'Second option' }),
                    new Option({ value : '3', children : 'Third option' })
                ]
            })
        ])
    ]
})
