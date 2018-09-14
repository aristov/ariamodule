import { a, article, h1, section, label } from 'htmlmodule'
import { SelectBox, Option } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Select box')),
        section([
            new SelectBox({
                label : label('Simple'),
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
            new SelectBox({
                label : label('Selected'),
                name : 'selectbox-selected',
                value : '2',
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
                label : label('Multi-selectable'),
                name : 'selectbox-multiselectable',
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
            new SelectBox({
                label : label('Read only'),
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
            }),
        ]),
        section([
            new SelectBox({
                label : label('Disabled'),
                disabled : true,
                name : 'selectbox-disabled',
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
        h1(a('Check selectbox')),
        section([
            new SelectBox({
                label : label('Simple'),
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
                label : label('Multi-selectable'),
                name : 'check-selectbox-multiselectable',
                multiSelectable : true,
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
                label : label('Read only'),
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
