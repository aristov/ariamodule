import { a, article, h1, section } from 'htmlmodule'
import { Link } from './ariamodule'

article({
    parentNode : document.body,
    children : [
        h1(a('Link')),
        section([
            new Link({
                onclick : event => location = '//yandex.ru',
                children : 'Simple'
            })
        ]),
        section([
            new Link({
                onclick : event => location = '//google.ru',
                classList : 'external',
                children : 'External'
            })
        ]),
        section([
            new Link({
                onclick : event => location = '//yandex.ru',
                disabled : true,
                children : 'Disabled'
            })
        ])
    ]
})
