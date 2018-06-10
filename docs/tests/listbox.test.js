import { a, article, h1, section } from 'htmlmodule'
import { ListBox, Option } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('ListBox')),
        section([
            new ListBox({
                label : 'Simple',
                name : 'listbox-simple',
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
                    }),
                    new Option({
                        value : '4',
                        children : 'Fourth option'
                    }),
                    new Option({
                        value : '5',
                        children : 'Fifth option'
                    })
                ]
            })
        ]),
        section([
            new ListBox({
                label : 'Selected',
                name : 'listbox-selected',
                options : [
                    new Option({
                        value : '1',
                        children : 'First option'
                    }),
                    new Option({
                        value : '2',
                        selected : true,
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
            new ListBox({
                label : 'Multiselectable',
                name : 'listbox-multiselectable',
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
                    }),
                    new Option({
                        value : '4',
                        children : 'Fourth option'
                    }),
                    new Option({
                        value : '5',
                        children : 'Fifth option'
                    }),
                    new Option({
                        value : '6',
                        children : 'Sixth option'
                    }),
                    new Option({
                        value : '7',
                        children : 'Seventh option'
                    }),
                    new Option({
                        value : '8',
                        children : 'Eighth option'
                    }),
                    new Option({
                        value : '9',
                        children : 'Ninth option'
                    })
                ]
            })
        ]),
        section([
            new ListBox({
                label : 'Read only',
                readOnly : true,
                name : 'listbox-readonly',
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
            new ListBox({
                label : 'Disabled',
                disabled : true,
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
        ])
    ]
})

0 && article({
    parentNode : document.body,
    children : [
        h1(a('Check listbox')),
        section([
            new ListBox({
                label : 'Simple',
                name : 'check-listbox-simple',
                options : [
                    new Option({
                        value : '1',
                        checked : false,
                        children : 'First option'
                    }),
                    new Option({
                        value : '2',
                        checked : false,
                        children : 'Second option'
                    }),
                    new Option({
                        value : '3',
                        checked : false,
                        children : 'Third option'
                    })
                ]
            })
        ]),
        section([
            new ListBox({
                label : 'Multiselectable',
                name : 'check-listbox-multiselectable',
                multiselectable : true,
                options : [
                    new Option({
                        value : '1',
                        checked : false,
                        children : 'First option'
                    }),
                    new Option({
                        value : '2',
                        checked : false,
                        children : 'Second option'
                    }),
                    new Option({
                        value : '3',
                        checked : false,
                        children : 'Third option'
                    })
                ]
            })
        ]),
        section([
            new ListBox({
                label : 'Read only',
                name : 'check-listbox-readonly',
                readOnly : true,
                options : [
                    new Option({
                        value : '1',
                        checked : false,
                        children : 'First option'
                    }),
                    new Option({
                        value : '2',
                        checked : false,
                        children : 'Second option'
                    }),
                    new Option({
                        value : '3',
                        checked : false,
                        children : 'Third option'
                    })
                ]
            })
        ])
    ]
})
