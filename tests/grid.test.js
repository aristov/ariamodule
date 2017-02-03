import { grid, rowGroup, row, rowHeader, columnHeader, gridCell } from '../lib/index'

const rows = Array.from(new Array(24))
const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const cells = ABC.split('')

const testgrid = grid({
    multiselectable : true,
    children : [
        rowGroup({
            tagName : 'thead',
            children : row([
                columnHeader(),
                cells.map(c => columnHeader(c))
            ])
        }),
        rowGroup(rows.map((r, j) => row([
            rowHeader(String(j)),
            cells.map((c, i) => gridCell({
                disabled : i === 5 && j === 5,
                selected : false,
                style : { width : 95 / cells.length + '%' }
            }))
        ])))
    ]
})

document.body.append(testgrid.node)
