import { Button, Group, Menu, MenuItem } from './ariamodule'
import './style/FloatMenuTest.css'

class FloatMenuTest extends Group {}

function button() {
    return new Button({
        controls : new Menu([
            new MenuItem('First item'),
            new MenuItem('Second item'),
            new MenuItem('Third item'),
            new MenuItem('Fourth item'),
            new MenuItem('Fifth item'),
            new MenuItem('Sixth item'),
        ]),
        children : 'Menu'
    })
}

new FloatMenuTest({
    parentNode : document.body,
    children : [
        button(),
        button(),
        button(),
        button()
    ]
})
