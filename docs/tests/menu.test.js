import { a, article, h1, section } from 'htmlmodule'
import { MenuButton, Menu, MenuItem, MenuItemLink } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Menu')),
        section([
            new MenuButton({
                menu : new Menu([
                    new MenuItem('First menu item'),
                    new MenuItem('Second menu item'),
                    new MenuItem('Third menu item')
                ]),
                expanded : 'false',
                children : 'Simple menu'
            })
        ]),
        section([
            new MenuButton({
                menu : new Menu([
                    new MenuItemLink({
                        href : '//yandex.ru',
                        children : 'First menu item'
                    }),
                    new MenuItemLink({
                        href : '//google.com',
                        children : 'Second menu item'
                    }),
                    new MenuItemLink({
                        href : '//microsoft.com',
                        children : 'Third menu item'
                    })
                ]),
                expanded : 'false',
                children : 'Menu item links'
            })
        ])
    ]
})
