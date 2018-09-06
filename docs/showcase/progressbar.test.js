import { a, article, h1, section } from 'htmlmodule'
import { ProgressBar, Button } from './ariamodule'

let button, bar, id

article({
    parentNode : document.body,
    children : [
        h1(a('Progress bar')),
        section([
            button = new Button({
                pressed : false,
                onclick : event => {
                    if(button.pressed) {
                        if(bar.valueNow === bar.valueMax) {
                            bar.valueNow = 0
                        }
                        id = setInterval(() => {
                            if(bar.valueNow === bar.valueMax) {
                                clearInterval(id)
                                button.pressed = false
                            }
                            else bar.valueNow++
                        }, 50)
                    }
                    else clearInterval(id)
                },
                children : 'Test run'
            }),
            bar = new ProgressBar({
                valueMin : 0,
                valueMax : 100,
                valueNow : 50
            })
        ])
    ]
})
