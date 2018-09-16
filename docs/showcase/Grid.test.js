import { a, article, h1, label, section } from 'htmlmodule'
import {
    Caption,
    Cell,
    ColumnHeader,
    DataCell,
    Grid,
    GridCell,
    GridRow,
    Row,
    RowGroup,
    RowHeader
} from './ariamodule'

article({
    parentNode : document.body,
    children : [
        h1(a('Grid')),
        section([
            new Grid([
                new Caption('Simple'),
                new RowGroup(new Row([
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
            ])
        ]),
        section([
            new Grid({
                multiSelectable : true,
                children : [
                    new Caption('Multi-selectable'),
                    new RowGroup(new Row([
                        new RowHeader,
                        new ColumnHeader('One'),
                        new ColumnHeader('Two'),
                        new ColumnHeader('Three')
                    ])),
                    new RowGroup(['A', 'B', 'C'].map(header => {
                        return new Row([
                            new RowHeader(header),
                            new GridCell({ selected : false }),
                            new GridCell({ selected : false }),
                            new GridCell({ selected : false })
                        ])
                    }))
                ]
            })
        ]),
        section([
            new Grid([
                new Caption('Interactive rows'),
                new RowGroup(new Row([
                    new RowHeader,
                    new ColumnHeader('One'),
                    new ColumnHeader('Two'),
                    new ColumnHeader('Three')
                ])),
                new RowGroup(['A', 'B', 'C'].map(header => {
                    return new GridRow({
                        selected : false,
                        children : [
                            new RowHeader(header),
                            new Cell,
                            new Cell,
                            new Cell
                        ]
                    })
                }))
            ])
        ])
    ]
})
article({
    parentNode : document.body,
    children : [
        h1(a('Data grid')),
        section([
            new Grid({
                multiSelectable : true,
                children : [
                    new Caption('Multi-selectable'),
                    new RowGroup(new Row([
                        new RowHeader,
                        new ColumnHeader('One'),
                        new ColumnHeader('Two'),
                        new ColumnHeader('Three')
                    ])),
                    new RowGroup(['A', 'B', 'C'].map(header => {
                        return new Row([
                            new RowHeader(header),
                            new DataCell({ selected : false }),
                            new DataCell({ selected : false }),
                            new DataCell({ selected : false })
                        ])
                    }))
                ]
            })
        ]),
        section([
            new Grid({
                multiSelectable : true,
                children : [
                    new Caption('Draggable cells'),
                    new RowGroup(new Row([
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
                                    grabbed : false,
                                    selected : false
                                })
                            })
                        ])
                    }))
                ]
            })
        ])
    ]
})
