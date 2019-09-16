import { ARIATypeBoolean } from './ARIATypeBoolean'

/**
 * Indicates that the element is not editable, but is otherwise operable.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-readonly
 */
export class ARIAReadOnly extends ARIATypeBoolean {
}

/**
 * @alias ARIAReadOnly
 */
export { ARIAReadOnly as ReadOnly }
