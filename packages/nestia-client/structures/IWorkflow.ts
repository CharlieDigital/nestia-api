import type { Format } from "typia/lib/tags/Format";
import type { MinLength } from "typia/lib/tags/MinLength";

import type { IStep } from "./IStep";
import type { IUser } from "./IUser";

/**
 * A workflow
 */
export type IWorkflow =
  /**
   * A workflow
   */
  {
    /**
     * the ID of the workflow
     */
    id: string & MinLength<1>;
    /**
     * The name of the workflow
     */
    name: string & MinLength<1>;
    /**
     * A description for the workflow
     */
    description?: undefined | string;
    /**
     * The steps of the workflow
     */
    steps: IStep[];
    /**
     * The date the workflow as created
     */
    created: string & Format<"date-time">;
    /**
     * The user that created the workflow
     */
    createdBy: IUser;
  };
