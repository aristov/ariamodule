import { columnheader, grid, gridcell, row, rowgroup, rowheader } from '../lib/index'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE

const date = new Date
const daystart = new Date(date.getFullYear(), date.getMonth(), date.getDate())
const start = new Date(daystart.getTime() + 9 * HOUR)
const duration = 15 * HOUR
const step = HOUR / 2
const timerows = Array.from(new Array(duration / step)).map((_, i) => {
    return new Date(start.getTime() + i * step)
})

const ABC = 'Admin Neo Forte Piano Sol Fa p1 p2'
const roomcolumns = ABC.split(' ')

function timeformat(h, m) {
    return [h < 10? '0' + h : h, m < 10? '0' + m : m].join(':')
}

const testgrid = grid({
    multiselectable : true,
    children : [
        rowgroup({
            tagName : 'thead',
            children : row([
                columnheader(date.getDate() + '/' + (date.getMonth() + 1)),
                roomcolumns.map(c => columnheader(c))
            ])
        }),
        rowgroup(timerows.map((r, j) => row({
            dataset : { time : r.getTime() },
            children : [
                rowheader(timeformat(r.getHours(), r.getMinutes())),
                roomcolumns.map(() => gridcell({
                    selected : false,
                    style : { width : 95 / roomcolumns.length + '%' }
                }))
            ]
        })))
    ]
})

document.body.append(testgrid.node)
