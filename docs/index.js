import { columnHeader, grid, gridCell, row, rowGroup, rowHeader } from '../lib/index'

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
        rowGroup({
            tagName : 'thead',
            children : row([
                columnHeader(date.getDate() + '/' + (date.getMonth() + 1)),
                roomcolumns.map(children => columnHeader({
                    style : { width : 95 / roomcolumns.length + '%' },
                    children,
                }))
            ])
        }),
        rowGroup(timerows.map(r => row({
            dataset : { time : r.getTime() },
            current : r.getTime() < now && now < r.getTime() + step?
                'time' :
                undefined,
            children : [
                rowHeader(timeformat(r.getHours(), r.getMinutes())),
                roomcolumns.map(() => gridCell({
                    selected : false,
                }))
            ]
        })))
    ]
})

document.body.append(testgrid.node)
