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
        ]),
        section([
            new Listbox({
                label : 'Multiselectable',
                multiselectable : true,
                children : [
                    new Option({ value : '1', children : 'First option' }),
                    new Option({ value : '2', children : 'Second option' }),
                    new Option({ value : '3', children : 'Third option' })
                ]
            })
        ]),
        section([
            new Listbox({
                label : 'Disabled',
                disabled : true,
                children : [
                    new Option({ value : '1', children : 'First option' }),
                    new Option({ value : '2', children : 'Second option' }),
                    new Option({ value : '3', children : 'Third option' })
                ]
            })
        ])
    ]
})

article({
    parentNode : document.body,
    children : [
        h1(a('Check listbox')),
        section([
            new Listbox({
                label : 'Simple',
                children : [
                    new Option({
                        value : '1',
                        checked : 'false',
                        children : 'First option'
                    }),
                    new Option({
                        value : '2',
                        checked : 'false',
                        children : 'Second option'
                    }),
                    new Option({
                        value : '3',
                        checked : 'false',
                        children : 'Third option'
                    })
                ]
            })
        ]),
        section([
            new Listbox({
                label : 'Multiselectable',
                multiselectable : true,
                children : [
                    new Option({
                        value : '1',
                        checked : 'false',
                        children : 'First option'
                    }),
                    new Option({
                        value : '2',
                        checked : 'false',
                        children : 'Second option'
                    }),
                    new Option({
                        value : '3',
                        checked : 'false',
                        children : 'Third option'
                    })
                ]
            })
        ]),
    ]
})
