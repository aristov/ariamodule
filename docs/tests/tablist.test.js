import { a, article, h1, section } from 'htmlmodule'
import { TabList, Tab, TabPanel } from '../../lib'

article({
    parentNode : document.body,
    id : 'example-tablist',
    children : [
        h1(a('Tab list')),
        section([
            h1('Horizontal'),
            new TabList([
                new Tab({
                    id : 'tab1',
                    controls : 'tabpanel1',
                    selected : 'true',
                    children : 'First'
                }),
                new Tab({
                    id : 'tab2',
                    controls : 'tabpanel2',
                    children : 'Second'
                }),
                new Tab({
                    id : 'tab3',
                    controls : 'tabpanel3',
                    children : 'Third'
                })
            ]),
            new TabPanel({
                id : 'tabpanel1',
                labelledBy : 'tab1',
                expanded : 'true',
                children : '1'
            }),
            new TabPanel({
                id : 'tabpanel2',
                labelledBy : 'tab2',
                expanded : 'false',
                children : '2'
            }),
            new TabPanel({
                id : 'tabpanel3',
                labelledBy : 'tab3',
                expanded : 'false',
                children : '3'
            })
        ]),
        section({
            id : 'tablist-vertical',
            children : [
                h1('Vertical'),
                new TabList({
                    orientation : 'vertical',
                    children : [
                        new Tab({
                            panel : new TabPanel('1'),
                            selected : 'true',
                            children : 'First'
                        }),
                        new Tab({
                            panel : new TabPanel('2'),
                            children : 'Second'
                        }),
                        new Tab({
                            panel : new TabPanel('3'),
                            children : 'Third'
                        })
                    ]
                })
            ]
        })
    ]
})
