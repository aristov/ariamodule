import { a, article, h1, section } from 'htmlmodule'
import { Selectbox, Option } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Selectbox')),
        section([
            new Selectbox({
                label : 'Simple',
                options : [
                    new Option({
                        value : '1',
                        children : 'First option'
                    }),
                    new Option({
                        value : '2',
                        children : 'Second option'
                    }),
                    new Option({
                        value : '3',
                        children : 'Third option'
                    })
                ]
            })
        ]),
        section([
            new Selectbox({
                label : 'Checkable',
                options : [
                    new Option({
                        checked : 'false',
                        value : '1',
                        children : 'First option'
                    }),
                    new Option({
                        checked : 'false',
                        value : '2',
                        children : 'Second option'
                    }),
                    new Option({
                        checked : 'false',
                        value : '3',
                        children : 'Third option'
                    })
                ]
            })
        ])
    ]
})
