import { a, article, h1, label, section } from 'htmlmodule'
import { Slider } from './ariamodule'

article({
    parentNode : document.body,
    children : [
        h1(a('Slider')),
        section([
            new Slider({
                label : label('Simple'),
                name : 'slider-simple'
            })
        ]),
        section([
            new Slider({
                label : label('Custom properties'),
                name : 'slider-custom',
                valueMin : -2,
                valueMax : 2,
                valueNow : -1
            })
        ]),
        section([
            new Slider({
                label : label('Multi-thumb'),
                name : 'slider-multi-thumb',
                valueNow : [20, 50, 80]
            })
        ]),
        section([
            new Slider({
                label : label('Read only'),
                name : 'slider-readonly',
                readOnly : true
            })
        ]),
        section([
            new Slider({
                label : label('Disabled'),
                name : 'slider-disabled',
                disabled : true
            })
        ]),
        section([
            h1('Vertical slider'),
            new Slider({
                label : label('Simple'),
                name : 'slider-vertical-simple',
                orientation : 'vertical'
            }),
            new Slider({
                label : label('Custom'),
                name : 'slider-vertical-custom',
                orientation : 'vertical',
                valueMin : -2,
                valueMax : 2,
                valueNow : -1
            }),
            new Slider({
                label : label('Multi-thumb'),
                name : 'slider-vertical-multi-thumb',
                orientation : 'vertical',
                valueNow : [30, 70]
            })
        ])
    ]
})
