import { Button } from 'htmlmodule'
import { Popup } from '../../lib/Popup'

new Button({
    parentNode : document.body,
    onclick : event => popup.hidden = !popup.hidden,
    children : 'Show the Popup'
})

const popup = new Popup({
    parentNode : document.body,
    hidden : true,
    children : 'Hello!'
})
