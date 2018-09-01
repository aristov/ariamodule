import { a, article, h1, label, section } from 'htmlmodule'
import { SpinButton } from './ariamodule'

article({
    parentNode : document.body,
    children : [
        h1(a('Spin button')),
        section([
            new SpinButton({ label : label('Simple') })
        ]),
        section([
            new SpinButton({
                label : label('Bounded'),
                valueMin : 1,
                valueMax : 9,
                valueNow : 5
            })
        ]),
        section([
            new SpinButton({
                label : label('Disabled'),
                disabled : true
            })
        ]),
        section([
            new SpinButton({
                label : label('Filled disabled'),
                valueNow : 42,
                disabled : true
            })
        ])
    ]
})


