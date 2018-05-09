import { HTMLElementAssembler } from 'htmlmodule/lib/element'
import * as aria from '.'

const { defineProperty } = Object

Object.values(aria).forEach(assembler => {
    const name = assembler.name
    if(!name.startsWith('ARIA') && !name.endsWith('Type')) {
        const prototype = HTMLElementAssembler.prototype
        const attr = name.charAt(0).toLowerCase() + name.substr(1)
        if(!(attr in prototype)) {
            defineProperty(prototype, attr, {
                configurable : true,
                set(value) {
                    this.setAttribute(assembler, value)
                },
                get() {
                    this.getAttribute(assembler)
                }
            })
        }
    }
})
