import { a, article, h1, section } from 'htmlmodule'
import { Link } from '../../lib/index'

article({
    parentNode : document.body,
    children : [
        h1(a('Link')),
        section([
            new Link({
                href : '//yandex.ru',
                children : 'Simple'
            })
        ]),
        section([
            new Link({
                href : '//google.ru',
                rel : 'external',
                children : 'External'
            })
        ])
    ]
})
