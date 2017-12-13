import { a, article, h1, section } from 'htmlmodule'
import {
    Grid,
    RowGroup,
    HeadRowGroup,
    Row,
    GridCell,
    DataCell,
    ColumnHeader,
    RowHeader
} from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Grid')),
        section([
            new Grid({
                label : 'Simple',
                content : [
                    new HeadRowGroup(new Row([
                        new RowHeader,
                        new ColumnHeader('One'),
                        new ColumnHeader('Two'),
                        new ColumnHeader('Three')
                    ])),
                    new RowGroup(['A', 'B', 'C'].map(header => {
                        return new Row([
                            new RowHeader(header),
                            new GridCell,
                            new GridCell,
                            new GridCell
                        ])
                    }))
                ]
            })
        ]),
        section([
            new Grid({
                label : 'Multiselectable',
                multiselectable : true,
                content : [
                    new HeadRowGroup(new Row([
                        new RowHeader,
                        new ColumnHeader('One'),
                        new ColumnHeader('Two'),
                        new ColumnHeader('Three')
                    ])),
                    new RowGroup(['A', 'B', 'C'].map(header => {
                        return new Row([
                            new RowHeader(header),
                            new GridCell({ selected : 'false' }),
                            new GridCell({ selected : 'false' }),
                            new GridCell({ selected : 'false' })
                        ])
                    }))
                ]
            })
        ]),
    ]
})
article({
    parentNode : document.body,
    children : [
        h1(a('Data grid')),
        section([
            new Grid({
                label : 'Multiselectable',
                multiselectable : true,
                content : [
                    new HeadRowGroup(new Row([
                        new RowHeader,
                        new ColumnHeader('One'),
                        new ColumnHeader('Two'),
                        new ColumnHeader('Three')
                    ])),
                    new RowGroup(['A', 'B', 'C'].map(header => {
                        return new Row([
                            new RowHeader(header),
                            new DataCell({ selected : 'false' }),
                            new DataCell({ selected : 'false' }),
                            new DataCell({ selected : 'false' })
                        ])
                    }))
                ]
            })
        ]),
        section([
            new Grid({
                label : 'Draggable cells',
                multiselectable : true,
                content : [
                    new HeadRowGroup(new Row([
                        new RowHeader,
                        new ColumnHeader('One'),
                        new ColumnHeader('Two'),
                        new ColumnHeader('Three')
                    ])),
                    new RowGroup(['A', 'B', 'C'].map(header => {
                        return new Row([
                            new RowHeader(header),
                            [1, 2, 3].map(() => {
                                return new DataCell({
                                    grabbed : 'false',
                                    selected : 'false'
                                })
                            })
                        ])
                    }))
                ]
            })
        ])
    ]
})
