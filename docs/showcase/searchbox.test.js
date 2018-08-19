import { a, article, h1, section } from 'htmlmodule'
import { Searchbox } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Searchbox')),
        section([
            new Searchbox({
                label : 'Simple',
                name : 'searchbox-simple'
            })
        ]),
        section([
            new Searchbox({
                label : 'With request',
                name : 'searchbox-placeholder',
                value : 'Press ESC key'
            })
        ]),
        section([
            new Searchbox({
                label : 'Read only',
                name : 'searchbox-simple',
                readOnly : true
            })
        ]),
        section([
            new Searchbox({
                label : 'Disabled',
                name : 'searchbox-disabled',
                disabled : true
            })
        ])
    ]
})
