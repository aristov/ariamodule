import { thead, a, article, h1, section } from 'htmlmodule'
import {
    Grid,
    RowGroup,
    Row,
    GridCell,
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
                    new RowGroup({
                        // ownerElement : thead(),
                        children : new Row([
                            new RowHeader,
                            new ColumnHeader('One'),
                            new ColumnHeader('Two'),
                            new ColumnHeader('Three')
                        ])
                    }),
                    new RowGroup(['A', 'B', 'C'].map(value => {
                        return new Row([
                            new RowHeader(value),
                            new GridCell,
                            new GridCell,
                            new GridCell
                        ])
                    }))
                ]
            })
        ])
    ]
})
