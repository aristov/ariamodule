import 'dommodule/lib/debug'
import { Role } from './Role'

const create = Role.prototype.create

Role.prototype.create = function(init) {
    create.call(this, init)
    Object.defineProperty(this.node, '__role__', { value : this })
}
