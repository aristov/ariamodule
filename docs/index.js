import { grid, rowgroup, row, rowheader, columnheader, gridcell } from '../lib/index'

const rows = Array.from(new Array(24))
const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const cells = ABC.split('')

const testgrid = grid({
    multiselectable : true,
    children : [
        rowgroup({
            tagName : 'thead',
            children : row([
                columnheader(),
                cells.map(c => columnheader(c))
            ])
        }),
        rowgroup(rows.map((r, j) => row([
            rowheader(String(j)),
            cells.map((c, i) => gridcell({
                disabled : i === 5 && j === 5,
                selected : false,
                style : { width : 95 / cells.length + '%' }
            }))
        ])))
    ]
})

document.body.appendChild(testgrid.node)
