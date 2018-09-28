import { a, article, h1, label, section } from 'htmlmodule'
import { Slider } from './ariamodule'

article({
    parentNode : document.body,
    children : [
        h1(a('Slider')),
        section([
            new Slider({ label : label('Simple') })
        ]),
        section([
            new Slider({
                label : label('Custom properties'),
                valueMin : -2,
                valueMax : 2,
                valueNow : -1
            })
        ]),
        section([
            new Slider({
                label : label('Multi-thumb'),
                valueNow : [20, 50, 80]
            })
        ]),
        section([
            new Slider({
                label : label('Read only'),
                readOnly : true
            })
        ]),
        section([
            new Slider({
                label : label('Disabled'),
                disabled : true
            })
        ]),
        section([
            h1('Vertical slider'),
            new Slider({
                label : label('Simple'),
                orientation : 'vertical'
            }),
            new Slider({
                label : label('Custom'),
                orientation : 'vertical',
                valueMin : -2,
                valueMax : 2,
                valueNow : -1
            }),
            new Slider({
                label : label('Multi-thumb'),
                orientation : 'vertical',
                valueNow : [30, 70]
            })
        ])
    ]
})
