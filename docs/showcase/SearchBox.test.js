import { a, article, h1, label, section } from 'htmlmodule'
import { SearchBox } from './ariamodule'

article({
    parentNode : document.body,
    children : [
        h1(a('Search box')),
        section([
            new SearchBox({
                label : label('Simple'),
                name : 'searchbox-simple'
            })
        ]),
        section([
            new SearchBox({
                label : label('With request'),
                name : 'searchbox-placeholder',
                value : 'Press ESC key'
            })
        ]),
        section([
            new SearchBox({
                label : label('Read only'),
                name : 'searchbox-readonly',
                readOnly : true
            })
        ]),
        section([
            new SearchBox({
                label : label('Disabled'),
                name : 'searchbox-disabled',
                disabled : true
            })
        ])
    ]
})
