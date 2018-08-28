import { a, article, h1, label, section, Span } from 'htmlmodule'
import { Slider } from '../../lib'

class SliderTrack extends Span {}

article({
    parentNode : document.body,
    id : 'example-slider',
    children : [
        h1(a('Slider')),
        section([
            label({ id : 'slider1', children : 'Simple' }),
            new SliderTrack(new Slider({ labelledBy : 'slider1' }))
        ]),
        section([
            label({ id : 'slider2', children : 'Custom properties' }),
            new SliderTrack(new Slider({
                labelledBy : 'slider2',
                valueMin : -10,
                valueNow : -5,
                valueMax : 10
            }))
        ]),
        section([
            label({ id : 'slider3', children : 'Multi-thumb' }),
            new SliderTrack([
                new Slider({
                    labelledBy : 'slider3',
                    valueNow : 30
                }),
                new Slider({
                    labelledBy : 'slider3',
                    valueNow : 70
                })
            ])
        ])
    ]
})
