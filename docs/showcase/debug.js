import { Role } from './ariamodule'

Object.defineProperties(EventTarget.prototype, {
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
