import { IStep, IUser, IWorkflow } from './model';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import typia, { tags } from 'typia';
import { db } from './database';
import { jsonArrayFrom } from 'kysely/helpers/postgres';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Testing the typia.random generator on simple object response
   * curl http://localhost:3000/user/5 | jq
   * curl http://localhost:3000/user/asdf | jq
   */
  @TypedRoute.Get('user/:id')
  public async getRandomUser(
    @TypedParam('id') id: number & tags.Type<'int32'>,
  ): Promise<IUser> {
    return { ...typia.random<IUser>(), id };
  }

  /**
   * Can it generate a random workflow hierarchy?
   * curl http://localhost:3000/workflow/asdf | jq
   */
  @TypedRoute.Get('workflow/:id')
  public async getRandomWorkflow(
    @TypedParam('id') id: string & tags.MinLength<1>,
  ): Promise<IWorkflow> {
    return { ...typia.random<IWorkflow>(), id };
  }

  /**
   * Can it generate a random workflow hierarchy with omitted field?
   * curl http://localhost:3000/workflow/asdf/root | jq
   */
  @TypedRoute.Get('workflow/:id/root')
  public async getRandomWorkflowNoStep(
    @TypedParam('id') id: string & tags.MinLength<1>,
  ): Promise<Omit<IWorkflow, 'steps'>> {
    const { steps, ...workflow } = typia.random<IWorkflow>();

    return workflow;
  }

  /**
   * Here, we want to have a payload for update that doesn't carry the step
   * curl -X POST http://localhost:3000/workflow/update -H "Content-Type: application/json" --data '{}' | jq
   */
  @TypedRoute.Post('workflow/update')
  public async updateWorkflow(@TypedBody() workflow: Omit<IWorkflow, 'steps'>) {
    return workflow;
  }

  /**
   * Can it generate a random workflow hierarchy?
   * curl http://localhost:3000/workflows | jq
   */
  @TypedRoute.Get('workflows')
  public async getRandomWorkflows(): Promise<IWorkflow[]> {
    return typia.random<IWorkflow[]>();
  }

  /**
   * Can it generate a random step hierarchy?
   * curl http://localhost:3000/step/asdf | jq
   */
  @TypedRoute.Get('step/:id')
  public async getRandomStep(
    @TypedParam('id') id: string & tags.MinLength<1>,
  ): Promise<IStep> {
    const randomStep = { ...typia.random<IStep>(), id };

    return randomStep;
  }

  /**
   * What does the code look like to get it from a DB?
   * curl http://localhost:3000/workflow/db/asdf | jq
   */
  @TypedRoute.Get('workflow/db/:id')
  public async getDbWorkflow(@TypedParam('id') id: string & tags.MinLength<1>) {
    const workflowWithSteps = await db
      .selectFrom('workflows')
      .where('id', '==', id)
      .select((eb) => [
        // eb = ExpressionBuilder
        'id',
        jsonArrayFrom(
          eb
            .selectFrom('steps')
            .select([
              'steps.id',
              'steps.name',
              'steps.description',
              'steps.order',
            ])
            .whereRef('steps.workflowId', '==', 'workflows.id'),
        ).as('steps'),
      ])
      .executeTakeFirstOrThrow();

    // This entity now carries all of the type restrictions from the interface!!!
    for (const step of workflowWithSteps.steps) {
      console.log(step.id);
    }

    return workflowWithSteps;
  }
}
