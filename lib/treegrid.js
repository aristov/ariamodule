import { Grid } from './grid'

/**
 * @summary A grid whose rows can be expanded and collapsed in the same manner as for a tree.
 * @see https://www.w3.org/TR/wai-aria-1.1/#treegrid
 */
export class TreeGrid extends Grid {}

/**
 * @param {{}} init
 * @returns {TreeGrid}
 */
export function treeGrid(init) {
    return new TreeGrid(init)
}
