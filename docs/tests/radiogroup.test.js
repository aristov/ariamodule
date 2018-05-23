import { a, article, h1, section } from 'htmlmodule'
import { RadioGroup, Radio } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Radio group')),
        section([
            new RadioGroup({
                label : 'Simple',
                radios : [
                    new Radio({
                        label : 'First',
                        value : '1'
                    }),
                    new Radio({
                        label : 'Second',
                        value : '2'
                    }),
                    new Radio({
                        label : 'Third',
                        value : '3'
                    })
                ]
            })
        ]),
        section([
            new RadioGroup({
                label : 'Checked',
                radios : [
                    new Radio({
                        label : 'First',
                        value : '1'
                    }),
                    new Radio({
                        label : 'Second',
                        value : '2',
                        checked : 'true'
                    }),
                    new Radio({
                        label : 'Third',
                        value : '3'
                    })
                ]
            })
        ]),
        section([
            new RadioGroup({
                label : 'Single disabled',
                radios : [
                    new Radio({
                        label : 'First',
                        value : '1',
                        disabled : true
                    }),
                    new Radio({
                        label : 'Second',
                        value : '2'
                    }),
                    new Radio({
                        label : 'Third',
                        value : '3'
                    })
                ]
            })
        ]),
        section([
            new RadioGroup({
                label : 'Checked and single disabled',
                radios : [
                    new Radio({
                        label : 'First',
                        value : '1',
                        checked : 'true'
                    }),
                    new Radio({
                        label : 'Second',
                        value : '2',
                        disabled : true
                    }),
                    new Radio({
                        label : 'Third',
                        value : '3'
                    })
                ]
            })
        ]),
        section([
            new RadioGroup({
                label : 'Group disabled',
                disabled : true,
                radios : [
                    new Radio({
                        label : 'First',
                        value : '1'
                    }),
                    new Radio({
                        label : 'Second',
                        value : '2'
                    }),
                    new Radio({
                        label : 'Third',
                        value : '3',
                        checked : 'true'
                    })
                ]
            })
        ])
    ]
})
