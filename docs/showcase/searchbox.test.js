import { a, article, h1, section } from 'htmlmodule'
import { SearchBox } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Search box')),
        section([
            new SearchBox({
                label : 'Simple',
                name : 'searchbox-simple'
            })
        ]),
        section([
            new SearchBox({
                label : 'With request',
                name : 'searchbox-placeholder',
                value : 'Press ESC key'
            })
        ]),
        section([
            new SearchBox({
                label : 'Read only',
                name : 'searchbox-simple',
                readOnly : true
            })
        ]),
        section([
            new SearchBox({
                label : 'Disabled',
                name : 'searchbox-disabled',
                disabled : true
            })
        ])
    ]
})
