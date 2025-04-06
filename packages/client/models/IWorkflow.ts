/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IStep } from './IStep';
import type { IUser } from './IUser';
/**
 * A workflow
 */
export type IWorkflow = {
    /**
     * the ID of the workflow
     */
    id: string;
    /**
     * The name of the workflow
     */
    name: string;
    /**
     * A description for the workflow
     */
    description?: string;
    /**
     * The steps of the workflow
     */
    steps: Array<IStep>;
    /**
     * The date the workflow as created
     */
    created: string;
    /**
     * The user that created the workflow
     */
    createdBy: IUser;
};

