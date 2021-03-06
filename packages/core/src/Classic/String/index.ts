import type { Sum } from "../../Newtype"
import { StringSum } from "../../Newtype"
import * as C from "../Closure"
import * as Eq from "../Equal"
import * as I from "../Identity"

/**
 * @category closure
 */
export const SumClosure = C.makeClosure<Sum<string>>((l, r) =>
  StringSum.wrap(`${StringSum.unwrap(l)}${StringSum.unwrap(r)}`)
)

/**
 * @category identity
 */
export const SumIdentity = I.makeIdentity(StringSum.wrap(""), SumClosure.combine)

/**
 * @category equal
 */
export const Equal = Eq.strict<string>()
