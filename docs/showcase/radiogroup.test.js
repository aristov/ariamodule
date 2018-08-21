import { a, article, h1, label, section } from 'htmlmodule'
import { RadioGroup, Radio } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Radio group')),
        section([
            new RadioGroup([
                label('Simple'),
                new Radio({
                    value : '1',
                    children : 'First'
                }),
                new Radio({
                    value : '2',
                    children : 'Second'
                }),
                new Radio({
                    value : '3',
                    children : 'Third'
                })
            ])
        ]),
        section([
            new RadioGroup([
                label('Checked'),
                new Radio({
                    value : '1',
                    children : 'First'
                }),
                new Radio({
                    value : '2',
                    checked : true,
                    children : 'Second'
                }),
                new Radio({
                    value : '3',
                    children : 'Third'
                })
            ])
        ]),
        section([
            new RadioGroup([
                label('Single disabled'),
                new Radio({
                    value : '1',
                    disabled : true,
                    children : 'First'
                }),
                new Radio({
                    value : '2',
                    children : 'Second'
                }),
                new Radio({
                    value : '3',
                    children : 'Third'
                })
            ])
        ]),
        section([
            new RadioGroup([
                label('Checked and single disabled'),
                new Radio({
                    value : '1',
                    checked : true,
                    children : 'First'
                }),
                new Radio({
                    value : '2',
                    disabled : true,
                    children : 'Second'
                }),
                new Radio({
                    value : '3',
                    children : 'Third'
                })
            ])
        ]),
        section([
            new RadioGroup({
                disabled : true,
                children : [
                    label('Group disabled'),
                    new Radio({
                        value : '1',
                        children : 'First'
                    }),
                    new Radio({
                        value : '2',
                        children : 'Second'
                    }),
                    new Radio({
                        value : '3',
                        checked : true,
                        children : 'Third'
                    })
                ]
            })
        ])
    ]
})