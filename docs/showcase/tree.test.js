import { a, article, h1, label, section } from 'htmlmodule'
import { Group, Tree, TreeItem } from '../../lib'

article({
    parentNode : document.body,
    children : [
        h1(a('Tree')),
        section([
            new Tree([
                new TreeItem({
                    label : label('First'),
                    expanded : true,
                    group : new Group([
                        new TreeItem({ label : label('Nested 1') }),
                        new TreeItem({ label : label('Nested 2') })
                    ])
                }),
                new TreeItem({
                    label : label('Second'),
                    expanded : true,
                    group : new Group([
                        new TreeItem({
                            label : label('Nested 1'),
                            expanded : true,
                            group : new Group([
                                new TreeItem({
                                    label : label('Subnested'),
                                    expanded : true,
                                    group : new Group([
                                        new TreeItem({ label : label('Deepnested 1') }),
                                        new TreeItem({ label : label('Deepnested 2') })
                                    ])
                                })
                            ])
                        }),
                        new TreeItem({
                            label : label('Nested 2'),
                            expanded : false,
                            group : new Group([
                                new TreeItem({ label : label('Subnested 1') }),
                                new TreeItem({ label : label('Subnested 2') })
                            ])
                        })
                    ])
                }),
                new TreeItem({
                    label : label('Third'),
                    expanded : true,
                    group : new Group([
                        new TreeItem({
                            label : label('Nested 1'),
                            expanded : false,
                            group : new Group([
                                new TreeItem({ label : label('Subnested I') }),
                                new TreeItem({ label : label('Subnested II') }),
                                new TreeItem({ label : label('Subnested III') })
                            ])
                        }),
                        new TreeItem({ label : label('Nested 2') })
                    ])
                })
            ])
        ])
    ]
})
