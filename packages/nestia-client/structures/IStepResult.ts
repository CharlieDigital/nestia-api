import type { Format } from "typia/lib/tags/Format";

import type { IUser } from "./IUser";

/**
 * The result of a step.
 */
export type IStepResult =
  /**
   * The result of a step.
   */
  {
    value: string;
    created: string & Format<"date-time">;
    user: IUser;
  };
