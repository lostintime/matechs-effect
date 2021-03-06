import { chain_ } from "./core"
import { fiberId } from "./fiberId"
import { interruptAs } from "./interruptAs"

/**
 * Returns an effect that is interrupted by the current fiber
 */
export const interrupt = chain_(fiberId(), interruptAs)
