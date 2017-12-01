import { a, article, h1, section } from 'htmlmodule'
import { link } from '../../lib/index'

article({
    parentNode : document.body,
    children : [
        h1(a('Link')),
        section([
            link({
                href : '//yandex.ru',
                children : 'Simple'
            })
        ]),
        section([
            link({
                href : '//google.ru',
                rel : 'external',
                children : 'External'
            })
        ])
    ]
})
