import { Selectable } from 'kysely';
import { tags } from 'typia';

/**
 * A user in the system
 */
export interface IUser {
  id: number & tags.Type<'int32'>;
  name: string & tags.MinLength<1>;
  email: string & tags.Format<'email'>;
}

/**
 * The result of a step.
 */
export interface IStepResult {
  value: string;
  created: Date;
  user: IUser;
}

/**
 * A step in a workflow
 */
export interface IStep {
  /**
   * The ID of the step.
   */
  id: string & tags.MinLength<1>;
  /**
   * The name of this step
   */
  name: string & tags.MinLength<1>;
  /**
   * A description for this step
   */
  description?: string;
  /**
   * The order of execution.
   */
  order: number;
  /**
   * The execution results for the step.
   */
  results?: IStepResult[];
  /**
   * The ID of the workflow that this step belongs to.
   */
  workflowId: string & tags.MinLength<1>;
}

/**
 * A workflow
 */
export interface IWorkflow {
  /**
   * the ID of the workflow
   */
  id: string & tags.MinLength<1>;
  /**
   * The name of the workflow
   */
  name: string & tags.MinLength<1>;
  /**
   * A description for the workflow
   */
  description?: string;
  /**
   * The steps of the workflow
   */
  steps: IStep[];
  /**
   * The date the workflow as created
   */
  created: Date;
  /**
   * The user that created the workflow
   */
  createdBy: IUser;
}

export type Workflow = Selectable<IWorkflow>;
export type Step = Selectable<IStep>;

export interface DB {
  users: IUser;
  results: IStepResult;
  steps: IStep;
  workflows: IWorkflow;
}
