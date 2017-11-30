import { main, p, span } from 'htmlmodule'
import { button } from './lib/button'

main({
    parentNode : document.body,
    children : p([
        button({
            pressed : 'false',
            labelledBy : 'label1,label2',
            children : 'Test button'
        }),
        span({
            id : 'label1',
            style : { margin : '10px' },
            children : 'Label 1'
        }),
        span({
            id : 'label2',
            style : { margin : '10px' },
            children : 'Label 2'
        })
    ])
})
