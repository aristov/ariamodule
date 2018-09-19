import { Role } from './ariamodule'

const prototype = (window.EventTarget || Node).prototype

Object.defineProperties(prototype, {
    __instance__ : {
        get() {
            return Role.getInstanceOf(this)
        }
    },
    __role__ : {
        get() {
            return Role.getRoleOf(this)
        }
    }
})
