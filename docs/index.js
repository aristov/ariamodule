import { columnheader, grid, gridcell, row, rowgroup, rowheader } from '../lib/index'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE

const date = new Date
const daystart = new Date(date.getFullYear(), date.getMonth(), date.getDate())
const hourstart = 9
const start = new Date(daystart.getTime() + hourstart * HOUR)
const duration = 15 * HOUR
const step = HOUR / 2
const timerows = Array.from(new Array(duration / step)).map((_, i) => {
    return new Date(start.getTime() + i * step)
})

const ABC = 'Neo Forte Piano Sol Fa'
const roomcolumns = ABC.split(' ')

function timeformat(h, m) {
    return [h < 10? '0' + h : h, m < 10? '0' + m : m].join(':')
}

const now = date.getTime()

const testgrid = grid({
    multiselectable : true,
    children : [
        rowgroup({
            tagName : 'thead',
            children : row([
                columnheader(date.getDate() + '/' + (date.getMonth() + 1)),
                roomcolumns.map(children => columnheader({
                    style : { width : 95 / roomcolumns.length + '%' },
                    children,
                }))
            ])
        }),
        rowgroup(timerows.map(r => row({
            dataset : { time : r.getTime() },
            current : r.getTime() < now && now < r.getTime() + step?
                'time' :
                undefined,
            children : [
                rowheader(timeformat(r.getHours(), r.getMinutes())),
                roomcolumns.map(() => gridcell({
                    selected : false,
                }))
            ]
        })))
    ]
})

document.body.append(testgrid.node)
