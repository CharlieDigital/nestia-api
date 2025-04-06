import type { MinLength } from "typia/lib/tags/MinLength";

import type { IStepResult } from "./IStepResult";

/**
 * A step in a workflow
 */
export type IStep =
  /**
   * A step in a workflow
   */
  {
    /**
     * The ID of the step.
     */
    id: string & MinLength<1>;
    /**
     * The name of this step
     */
    name: string & MinLength<1>;
    /**
     * A description for this step
     */
    description?: undefined | string;
    /**
     * The order of execution.
     */
    order: number;
    /**
     * The execution results for the step.
     */
    results?: undefined | IStepResult[];
    /**
     * The ID of the workflow that this step belongs to.
     */
    workflowId: string & MinLength<1>;
  };
