import { Role } from './Role'
import { RoleList } from './RoleList'

/**
 * A scrollable list of articles where scrolling may cause
 *  articles to be added to or removed from either end of the list.
 * @see https://www.w3.org/TR/wai-aria-1.1/#feed
 */
export class RoleFeed extends RoleList {
}

export { RoleFeed as Feed, RoleFeed as ARIAFeed }

Role.Feed = RoleFeed
