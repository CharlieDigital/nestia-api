/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IStepResult } from './IStepResult';
/**
 * A step in a workflow
 */
export type IStep = {
    /**
     * The ID of the step.
     */
    id: string;
    /**
     * The name of this step
     */
    name: string;
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
    results?: Array<IStepResult>;
    /**
     * The ID of the workflow that this step belongs to.
     */
    workflowId: string;
};

