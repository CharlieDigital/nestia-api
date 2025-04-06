import { INestiaConfig } from '@nestia/sdk';
import { NestFactory } from '@nestjs/core';
// import { FastifyAdapter } from "@nestjs/platform-fastify";

import { AppModule } from './src/app.module';

const NESTIA_CONFIG: INestiaConfig = {
  input: async () => {
    const app = await NestFactory.create(AppModule);
    // const app = await NestFactory.create(YourModule, new FastifyAdapter());
    // app.setGlobalPrefix("api");
    // app.enableVersioning({
    //     type: VersioningType.URI,
    //     prefix: "v",
    // })
    return app;
  },
  output: 'packages/nestia-client',
  distribute: 'packages/api', // Build an API package
  clone: true, // Clone the models to the API package
  swagger: {
    openapi: '3.1',
    output: 'dist/swagger.json',
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local Server',
      },
    ],
    decompose: true,
    beautify: true,
  },
};
export default NESTIA_CONFIG;
