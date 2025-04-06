/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IUser } from './IUser';
/**
 * Construct a type with the properties of T except for those in type K.
 */
export type OmitIWorkflowsteps = {
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
     * The date the workflow as created
     */
    created: string;
    /**
     * The user that created the workflow
     */
    createdBy: IUser;
};

