import { a, article, h1, section, Span } from 'htmlmodule'
import { Slider } from '../../lib'

article({
    parentNode : document.body,
    id : 'example-slider',
    children : [
        h1(a('Slider')),
        section([
            new Span({
                className : 'slidertrack',
                children : new Slider
            })
        ]),
        section([
            new Span({
                className : 'slidertrack',
                children : new Slider({
                    valueMin : -10,
                    valueNow : -5,
                    valueMax : 10
                })
            })
        ])
    ]
})
