import { a, article, h1, label, section, span } from 'htmlmodule'
import { ListBox, Option } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('List box')),
        section([
            new ListBox({
                label : label('Simple'),
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
                    })
                ]
            })
        ]),
        section([
            new ListBox({
                label : label('Selected'),
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
                label : label('Read only'),
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
                label : label('Disabled'),
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

article({
    parentNode : document.body,
    children : [
        h1(a('Multi list box')),
        section([
            new ListBox({
                label : label('Multi-selectable'),
                name : 'listbox-multiselectable',
                multiSelectable : true,
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
                label : label('Selected'),
                name : 'listbox-multiselectable-selected',
                multiSelectable : true,
                children : span([
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
                        selected : true,
                        children : 'Third option'
                    }),
                    new Option({
                        value : '4',
                        selected : true,
                        children : 'Fourth option'
                    }),
                    new Option({
                        value : '5',
                        selected : true,
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
                ])
            })
        ]),
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
                label : 'Multi-selectable',
                name : 'check-listbox-multiselectable',
                multiSelectable : true,
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
