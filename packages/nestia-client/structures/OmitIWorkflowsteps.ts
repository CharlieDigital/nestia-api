import type { Format } from "typia/lib/tags/Format";
import type { MinLength } from "typia/lib/tags/MinLength";

import type { IUser } from "./IUser";

/**
 * Construct a type with the properties of T except for those in type K.
 */
export type OmitIWorkflowsteps =
  /**
   * Construct a type with the properties of T except for those in type K.
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
     * The date the workflow as created
     */
    created: string & Format<"date-time">;
    /**
     * The user that created the workflow
     */
    createdBy: IUser;
  };
