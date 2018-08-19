import { a, article, h1, section } from 'htmlmodule'
import { SelectBox, Option } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('SelectBox')),
        section([
            new SelectBox({
                label : 'Simple',
                name : 'selectbox-simple',
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
            new SelectBox({
                label : 'Multiselectable',
                name : 'selectbox-multiselectable',
                multiselectable : true,
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
        new SelectBox({
            label : 'Read only',
            readOnly : true,
            name : 'selectbox-readonly',
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
    ]
})

0 && article({
    parentNode : document.body,
    children : [
        h1(a('Check selectbox')),
        section([
            new SelectBox({
                label : 'Simple',
                name : 'check-selectbox-simple',
                options : [
                    new Option({
                        checked : false,
                        value : '1',
                        children : 'First option'
                    }),
                    new Option({
                        checked : false,
                        value : '2',
                        children : 'Second option'
                    }),
                    new Option({
                        checked : false,
                        value : '3',
                        children : 'Third option'
                    })
                ]
            })
        ]),
        section([
            new SelectBox({
                label : 'Multiselectable',
                name : 'check-selectbox-multiselectable',
                multiselectable : true,
                options : [
                    new Option({
                        checked : false,
                        value : '1',
                        children : 'First option'
                    }),
                    new Option({
                        checked : false,
                        value : '2',
                        children : 'Second option'
                    }),
                    new Option({
                        checked : false,
                        value : '3',
                        children : 'Third option'
                    })
                ]
            })
        ]),
        section([
            new SelectBox({
                label : 'Read only',
                name : 'check-selectbox-readonly',
                readOnly : true,
                options : [
                    new Option({
                        checked : false,
                        value : '1',
                        children : 'First option'
                    }),
                    new Option({
                        checked : false,
                        value : '2',
                        children : 'Second option'
                    }),
                    new Option({
                        checked : false,
                        value : '3',
                        children : 'Third option'
                    })
                ]
            })
        ])
    ]
})
