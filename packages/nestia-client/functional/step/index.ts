/**
 * @packageDocumentation
 * @module api.functional.step
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { MinLength } from "typia/lib/tags/MinLength";

import type { IStep } from "../../structures/IStep";

/**
 * Can it generate a random step hierarchy?
 * curl http://localhost:3000/step/asdf | jq
 * @controller AppController.getRandomStep
 * @path GET /step/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getRandomStep(
  connection: IConnection,
  id: string & MinLength<1>,
): Promise<getRandomStep.Output> {
  return PlainFetcher.fetch(connection, {
    ...getRandomStep.METADATA,
    template: getRandomStep.METADATA.path,
    path: getRandomStep.path(id),
  });
}
export namespace getRandomStep {
  export type Output = IStep;

  export const METADATA = {
    method: "GET",
    path: "/step/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (id: string & MinLength<1>) =>
    `/step/${encodeURIComponent(id?.toString() ?? "null")}`;
}
