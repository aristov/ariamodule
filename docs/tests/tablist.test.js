import { a, article, h1, section } from 'htmlmodule'
import { TabList, Tab, TabPanel } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Tab list')),
        section([
            new TabList([
                new Tab({
                    children : 'First',
                    controls : 'tabpanel1',
                    selected : 'true'
                }),
                new Tab({
                    children : 'Second',
                    controls : 'tabpanel2'
                }),
                new Tab({
                    children : 'Third',
                    controls : 'tabpanel3'
                })
            ]),
            new TabPanel({
                id : 'tabpanel1',
                expanded : 'true',
                children : '1'
            }),
            new TabPanel({
                id : 'tabpanel2',
                expanded : 'false',
                children : '2'
            }),
            new TabPanel({
                id : 'tabpanel3',
                expanded : 'false',
                children : '3'
            })
        ])
    ]
})
