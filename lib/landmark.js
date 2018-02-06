import { Section } from './section'

/**
 * A perceivable section containing content that is relevant to a specific,
 * author-specified purpose and sufficiently important that users will likely
 * want to be able to navigate to the section easily and to have it listed
 * in a summary of the page. Such a page summary could be generated dynamically
 * by a user agent or assistive technology.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#landmark
 */
export class Landmark extends Section {}
