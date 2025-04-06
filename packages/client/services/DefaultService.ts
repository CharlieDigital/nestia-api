/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IStep } from '../models/IStep';
import type { IUser } from '../models/IUser';
import type { IWorkflow } from '../models/IWorkflow';
import type { OmitIWorkflowsteps } from '../models/OmitIWorkflowsteps';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * @returns string
     * @throws ApiError
     */
    public static get(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }
    /**
     * Testing the typia.random generator on simple object response
     * curl http://localhost:3000/user/5 | jq
     * curl http://localhost:3000/user/asdf | jq
     * @param id
     * @returns IUser
     * @throws ApiError
     */
    public static getUser(
        id: number,
    ): CancelablePromise<IUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Can it generate a random workflow hierarchy?
     * curl http://localhost:3000/workflow/asdf | jq
     * @param id
     * @returns IWorkflow
     * @throws ApiError
     */
    public static getWorkflow(
        id: string,
    ): CancelablePromise<IWorkflow> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflow/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Can it generate a random workflow hierarchy with omitted field?
     * curl http://localhost:3000/workflow/asdf/root | jq
     * @param id
     * @returns OmitIWorkflowsteps
     * @throws ApiError
     */
    public static getWorkflowRoot(
        id: string,
    ): CancelablePromise<OmitIWorkflowsteps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflow/{id}/root',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Here, we want to have a payload for update that doesn't carry the step
     * curl -X POST http://localhost:3000/workflow/update -H "Content-Type: application/json" --data '{}' | jq
     * @param requestBody
     * @returns OmitIWorkflowsteps
     * @throws ApiError
     */
    public static postWorkflowUpdate(
        requestBody: OmitIWorkflowsteps,
    ): CancelablePromise<OmitIWorkflowsteps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workflow/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Can it generate a random workflow hierarchy?
     * curl http://localhost:3000/workflows | jq
     * @returns IWorkflow
     * @throws ApiError
     */
    public static getWorkflows(): CancelablePromise<Array<IWorkflow>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflows',
        });
    }
    /**
     * Can it generate a random step hierarchy?
     * curl http://localhost:3000/step/asdf | jq
     * @param id
     * @returns IStep
     * @throws ApiError
     */
    public static getStep(
        id: string,
    ): CancelablePromise<IStep> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/step/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * What does the code look like to get it from a DB?
     * curl http://localhost:3000/workflow/db/asdf | jq
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static getWorkflowDb(
        id: string,
    ): CancelablePromise<{
        id: string;
        steps: Array<{
            id: string;
            name: string;
            description?: string;
            order: number;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflow/db/{id}',
            path: {
                'id': id,
            },
        });
    }
}
