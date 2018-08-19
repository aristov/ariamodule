import { RoleAttrAssembler } from '../../lib'
import '../../lib/aria/html'

Object.defineProperties(EventTarget.prototype, {
    __instance__ : {
        get() {
            return RoleAttrAssembler.getInstanceOf(this)
        }
    },
    __role__ : {
        get() {
            return RoleAttrAssembler.getRoleOf(this)
        }
    }
})

import './link.test'
import './button.test'
import './checkbox.test'
import './radiogroup.test'
import './listbox.test'
import './textbox.test'
import './searchbox.test'
import './selectbox.test'
import './combobox.test'
import './menu.test'
import './dialog.test'
import './tree.test'
import './grid.test'
import './tablist.test'
import './slider.test'
