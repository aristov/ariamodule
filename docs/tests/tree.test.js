import { a, article, h1, section } from 'htmlmodule'
import { Group, Tree, TreeItem } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Tree')),
        section([
            new Tree([
                new TreeItem({
                    label : 'First',
                    expanded : 'true',
                    children : new Group([
                        new TreeItem({ label : 'Nested 1' }),
                        new TreeItem({ label : 'Nested 2' })
                    ])
                }),
                new TreeItem({
                    label : 'Second',
                    expanded : 'true',
                    children : new Group([
                        new TreeItem({
                            label : 'Nested 1',
                            expanded : 'false',
                            children : new Group([
                                new TreeItem({ label : 'Subnested I' }),
                                new TreeItem({ label : 'Subnested II' }),
                                new TreeItem({ label : 'Subnested III' })
                            ])
                        }),
                        new TreeItem({ label : 'Nested 2' })
                    ])
                }),
                new TreeItem({
                    label : 'Third',
                    expanded : 'true',
                    children : new Group([
                        new TreeItem({
                            label : 'Nested 1',
                            expanded : 'true',
                            children : new Group([
                                new TreeItem({
                                    label : 'Subnested',
                                    expanded : 'true',
                                    children : new Group(new TreeItem({ label : 'Deepnested' }))
                                })
                            ])
                        }),
                        new TreeItem({
                            label : 'Nested 2',
                            expanded : 'false',
                            children : new Group(new TreeItem({ label : 'Subnested' }))
                        })
                    ])
                })
            ])
        ])
    ]
})

const xml = `<new Tree>
    <treeitem expanded="true" label="First">
        <treeitem label="Nested 1"/>
        <treeitem label="Nested 2"/>
    </treeitem>
    <treeitem expanded="true" label="Second">
        <treeitem expanded="false" label="Nested 1">
            <treeitem label="Subnested I"/>
            <treeitem label="Subnested II"/>
            <treeitem label="Subnested III"/>
        </treeitem>
        <treeitem label="Nested 2"/>
    </treeitem>
    <treeitem expanded="true" label="Third">
        <treeitem expanded="true" label="Nested 1">
            <treeitem expanded="true" label="Subnested">
                <treeitem label="Deepnested"/>
            </treeitem>
        </treeitem>
        <treeitem expanded="false" label="Nested 2">
            <treeitem label="Subnested"/>
        </treeitem>
    </treeitem>
</new Tree>`

const parser = new DOMParser
const doc = parser.parseFromString(xml, 'application/xml')
function process(node) {
    const chunks = [node.tagName, '(']
    if(node.hasAttributes()) {
        chunks.push('{')
        Array.prototype.forEach.call(node.attributes, (attr, i) => {
            chunks.push(attr.name, ':\'', attr.value, '\'')
            if(i < node.attributes.length - 1 && !node.hasChildNodes()) {
                chunks.push(',')
            }
        })
    }
    if(node.hasChildNodes()) {
        if(node.hasAttributes()) chunks.push('children:')
        chunks.push('[')
        Array.prototype.forEach.call(node.children, child => {
            chunks.push(process(child))
        })
        chunks.push(']')
    }
    if(node.hasAttributes()) {
        chunks.push('}')
    }
    chunks.push(')')
    if(node.nextElementSibling) chunks.push(',')
    return chunks.join('')
}
// console.log(process(doc.documentElement))
