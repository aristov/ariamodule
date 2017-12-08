import { a, article, h1, section } from 'htmlmodule'
import {
    Grid,
    RowGroup,
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
                // label : 'Simple',
                children : [
                    new RowGroup(new Row([
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
                // label : 'Simple',
                multiselectable : true,
                children : [
                    new RowGroup(new Row([
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
        section([
            new Grid({
                // label : 'Simple',
                multiselectable : true,
                children : [
                    new RowGroup(new Row([
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
                // label : 'Simple',
                multiselectable : true,
                children : [
                    new RowGroup(new Row([
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
