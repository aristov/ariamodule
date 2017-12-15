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
                    new Radio({ value : '1', label : 'First' }),
                    new Radio({ value : '2', label : 'Second' }),
                    new Radio({ value : '3', label : 'Third' })
                ]
            })
        ]),
        section([
            new RadioGroup({
                label : 'Checked',
                radios : [
                    new Radio({ value : '1', label : 'First' }),
                    new Radio({
                        value : '2',
                        checked : 'true',
                        label : 'Second'
                    }),
                    new Radio({ value : '3', label : 'Third' })
                ]
            })
        ]),
        section([
            new RadioGroup({
                label : 'Single disabled',
                radios : [
                    new Radio({
                        value : '1',
                        disabled: true,
                        label : 'First'
                    }),
                    new Radio({
                        value : '2',
                        label : 'Second'
                    }),
                    new Radio({
                        value : '3',
                        label : 'Third'
                    })
                ]
            })
        ]),
        section([
            new RadioGroup({
                label : 'Checked and single disabled',
                radios : [
                    new Radio({
                        value : '1',
                        checked : true,
                        label : 'First'
                    }),
                    new Radio({
                        value : '2',
                        disabled: true,
                        label : 'Second'
                    }),
                    new Radio({
                        value : '3',
                        label : 'Third'
                    })
                ]
            })
        ]),
        section([
            new RadioGroup({
                label : 'Group disabled',
                disabled : true,
                radios : [
                    new Radio({ value : '1', label : 'First' }),
                    new Radio({ value : '2', label : 'Second' }),
                    new Radio({
                        value : '3',
                        checked : 'true',
                        label : 'Third'
                    })
                ]
            })
        ])
    ]
})
