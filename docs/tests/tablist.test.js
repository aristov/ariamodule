import { a, article, h1, section } from 'htmlmodule'
import { Group, TabList, Tab, TabPanel } from '../../lib'

const panels = [
    new TabPanel('1'),
    new TabPanel('2'),
    new TabPanel('3')
]
let tabList

article({
    parentNode : document.body,
    children : [
        h1(a('Tab list')),
        section([
            h1('Horizontal'),
            new TabList([
                new Tab({
                    controls : panels[0],
                    children : 'First'
                }),
                new Tab({
                    selected : true,
                    controls : panels[1],
                    children : 'Second'
                }),
                new Tab({
                    controls : panels[2],
                    children : 'Third'
                })
            ]),
            panels
        ]),
        section([
            h1('Vertical'),
            tabList = new TabList({
                orientation : 'vertical',
                children : [
                    new Tab('First'),
                    new Tab('Second'),
                    new Tab('Third')
                ]
            }),
            new TabPanel({
                labelledBy : tabList.tabs[0],
                children : '1'
            }),
            new TabPanel({
                labelledBy : tabList.tabs[1],
                children : '2'
            }),
            new TabPanel({
                labelledBy : tabList.tabs[2],
                children : '3'
            })
        ])
    ]
})

let groups

article({
    parentNode : document.body,
    children : [
        h1(a('Tab list + Groups')),
        section([
            new TabList({
                controls : groups = [
                    new Group([
                        new TabPanel('1'),
                        new TabPanel('2'),
                        new TabPanel('3')
                    ]),
                    new Group([
                        new TabPanel('A'),
                        new TabPanel('B'),
                        new TabPanel('C')
                    ])
                ],
                children : [
                    new Tab('First'),
                    new Tab('Second'),
                    new Tab('Third')
                ]
            }),
            groups
        ])
    ]
})
