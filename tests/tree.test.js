import { tree, treeItem } from '../lib'

const map = Array.prototype.map

function domTree(node) {
    return treeItem({
        expanded : node.children.length? 'true' : undefined,
        children : [
            node.tagName,
            map.call(node.children, child => domTree(child))
        ]
    })
}

tree({
    parentNode : document.body,
    children : domTree(document.documentElement)
})
