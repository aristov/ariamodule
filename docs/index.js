import {
    grid, row, gridcell
} from '../lib/index'

const rows = Array.from(new Array(10))
const cells = Array.from(new Array(10))

const testgrid = grid(rows.map((r, j) =>
    row(cells.map((c, i) =>
        gridcell(j + '_' + c + '_' + i)))
))

document.body.appendChild(testgrid.node)
