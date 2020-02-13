import { effect as T } from "@matechs/effect";
import { sequenceS } from "fp-ts/lib/Apply";
import { pipe } from "fp-ts/lib/pipeable";
import Link from "next/link";
import { MemoInput } from "./MemoInput";
import { DT } from "../modules/date";
import { ORG } from "../modules/orgs";
import { UI, accessP } from "../../lib";
import { DisplayFlash } from "../modules/flash/view";

// alpha
/* istanbul ignore file */

export const Home = UI.of(
  pipe(
    sequenceS(T.effect)({
      UpdateOrganisations: ORG.UpdateOrganisations,
      ShowOrgs: ORG.ShowOrgs,
      MemoInput,
      UpdateDate: DT.UpdateDate,
      ShowDate: DT.ShowDate,
      LogDate: DT.LogDate,
      Flash: DisplayFlash,
      Foo: accessP((_: { foo: string }) => _.foo)
    }),
    T.map(v => () => (
      <>
        <v.ShowDate foo={v.Foo} />
        <v.UpdateDate />
        <v.UpdateOrganisations />
        <v.ShowOrgs />
        <Link href={"/foo"}>
          <a>foo</a>
        </Link>
        <v.MemoInput />
        <v.LogDate />
        <v.Flash>{({ message }) => <div>{message}</div>}</v.Flash>
      </>
    ))
  )
);