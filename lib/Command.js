import { Role } from './Role'
import { Widget } from './Widget'

/**
 * @summary A form of widget that performs an action but does not receive input data.
 * @see https://www.w3.org/TR/wai-aria-1.1/#command
 * @abstract
 */
export class Command extends Widget {}

export const ARIACommand = Role.Command = Command
