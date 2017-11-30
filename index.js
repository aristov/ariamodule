import { main, p, span } from 'htmlmodule'
import { button } from './lib/button'

main({
    parentNode : document.body,
    children : p([
        button({
            pressed : 'false',
            errorMessage : 'errorspan',
            children : 'Test button'
        }),
        span({
            id : 'errorspan',
            style : { margin : '10px' },
            children : 'Error!'
        })
    ])
})
