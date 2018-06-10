import { a, article, h1, section } from 'htmlmodule'
import { Listbox, Option } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Listbox')),
        section([
            new Listbox({
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
            new Listbox({
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
            new Listbox({
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
                    })
                ]
            })
        ]),
        section([
            new Listbox({
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
            new Listbox({
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
            new Listbox({
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
            new Listbox({
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
            new Listbox({
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
