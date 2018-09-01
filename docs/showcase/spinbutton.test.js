import { a, article, h1, label, section } from 'htmlmodule'
import { SpinButton } from './ariamodule'

article({
    parentNode : document.body,
    children : [
        h1(a('Spin button')),
        section([
            new SpinButton({
                label : label('Simple'),
                name : 'spinbutton-simple'
            })
        ]),
        section([
            new SpinButton({
                label : label('Non-negative'),
                name : 'spinbutton-non-negative',
                valueMin : 0,
                valueNow : 0
            })
        ]),
        section([
            new SpinButton({
                label : label('Bounded'),
                name : 'spinbutton-bounded',
                valueMin : 1,
                valueMax : 9,
                valueNow : 5
            })
        ]),
        section([
            new SpinButton({
                label : label('Negative bounded'),
                name : 'spinbutton-negative-bounded',
                valueMin : -9,
                valueMax : -1,
                valueNow : -5
            })
        ]),
        section([
            new SpinButton({
                label : label('Custom step'),
                name : 'spinbutton-custom-step',
                valueNow : 50,
                step : 50
            })
        ]),
        section([
            new SpinButton({
                label : label('Fractional'),
                name : 'spinbutton-fractional',
                valueMin : -1,
                valueMax : 1,
                valueNow : .5,
                step : .1
            })
        ]),
        section([
            new SpinButton({
                label : label('Read only'),
                name : 'spinbutton-readonly',
                valueNow : 30,
                readOnly : true
            })
        ]),
        section([
            new SpinButton({
                label : label('Filled disabled'),
                name : 'spinbutton-disabled',
                valueNow : 42,
                disabled : true
            })
        ])
    ]
})


