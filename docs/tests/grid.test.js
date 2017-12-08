import { a, article, h1, section } from 'htmlmodule'
import {
    Grid,
    RowGroup,
    HeadRowGroup,
    Row,
    GridCell,
    GridCellInput,
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
                    new RowGroup(['A', 'B', 'C'].map(value => {
                        return new Row([
                            new RowHeader(value),
                            new GridCell(),
                            new GridCell(),
                            new GridCell()
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
                    new RowGroup(['A', 'B', 'C'].map(value => {
                        return new Row([
                            new RowHeader(value),
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
                    new RowGroup(['A', 'B', 'C'].map(value => {
                        return new Row([
                            new RowHeader(value),
                            new GridCellInput({ selected : 'false' }),
                            new GridCellInput({ selected : 'false' }),
                            new GridCellInput({ selected : 'false' })
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
                    new RowGroup(['A', 'B', 'C'].map(value => {
                        return new Row([
                            new RowHeader(value),
                            [1, 2, 3].map(() => {
                                return new GridCellInput({
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
