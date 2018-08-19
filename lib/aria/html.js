import { HTMLElementAssembler } from 'htmlmodule/lib/element'
import * as aria from '.'

const { defineProperty } = Object

Object.values(aria).forEach(assembler => {
    const prototype = HTMLElementAssembler.prototype
    const name = assembler.name
    const prop = name.charAt(0).toLowerCase() + name.substr(1)
    if(!(prop in prototype)) {
        defineProperty(prototype, prop, {
            configurable : true,
            set(value) {
                this.setAttribute(assembler, value)
            },
            get() {
                return this.getAttribute(assembler)
            }
        })
    }
})
