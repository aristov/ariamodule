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
                    group : new Group([
                        new TreeItem({ label : 'Nested 1' }),
                        new TreeItem({ label : 'Nested 2' })
                    ])
                }),
                new TreeItem({
                    label : 'Second',
                    expanded : 'true',
                    group : new Group([
                        new TreeItem({
                            label : 'Nested 1',
                            expanded : 'true',
                            group : new Group([
                                new TreeItem({
                                    label : 'Subnested',
                                    expanded : 'true',
                                    group : new Group([
                                        new TreeItem({ label : 'Deepnested 1' }),
                                        new TreeItem({ label : 'Deepnested 2' })
                                    ])
                                })
                            ])
                        }),
                        new TreeItem({
                            label : 'Nested 2',
                            expanded : 'false',
                            group : new Group([
                                new TreeItem({ label : 'Subnested 1' }),
                                new TreeItem({ label : 'Subnested 2' })
                            ])
                        })
                    ])
                }),
                new TreeItem({
                    label : 'Third',
                    expanded : 'true',
                    group : new Group([
                        new TreeItem({
                            label : 'Nested 1',
                            expanded : 'false',
                            group : new Group([
                                new TreeItem({ label : 'Subnested I' }),
                                new TreeItem({ label : 'Subnested II' }),
                                new TreeItem({ label : 'Subnested III' })
                            ])
                        }),
                        new TreeItem({ label : 'Nested 2' })
                    ])
                })
            ])
        ])
    ]
})
