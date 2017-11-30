import { p, main } from 'htmlmodule'
import { button } from './lib/button'

main({
    parentNode : document.body,
    children : p(button({
        pressed : 'false',
        children : 'Test button'
    }))
})
