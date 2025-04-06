# Nestia + Typia

## Motivation

TypeScript lacks runtime types and this creates issues when working in scenarios where data quality matters because there are no runtime types.

To work around this, packages like Zod, Valibot, class-validator, et al allow modeling of schemas that remain at runtime (whereas the TypeScript itself disappears at build).  However, this precisely means that there is an excess of modeling code being written.

While the mechanism of Zod and Valibot is different from class-validator, both approaches effectively require the user to provide additional runtime artifacts (schema objects versus decorator functions) which provide the type metadata at runtime.  In the case of Zod and Valibot, this means creating runtime schema objects.  In the case of class-validator, this means creating runtime function wrappers using decorators.

Where Typia and Nestia differ is that the solution approach is *build time* meaning that at the point of build, it alters the actual underlying code and inlines the JavaScript type checking.  This yields significant performance benefits ([see the benchmarks](https://moltar.github.io/typescript-runtime-type-benchmarks/)) while also simplifying the data modelling process by removing much of the duplication that occurs with pure runtime solutions.

In this codebase, we explore the ergonomics and DX or working with Typia, Nestia, and Kysely.

## Layout

This section documents the key points in this source tree.

```
/root
  └─ /src
    └─ /client                # Sample TypeScript client generated using openapi-typescript-codegen tooling
    └─ /nestia-client         # Sample client generated using Nestia's built in SDK generation
    └─ model.ts               # Model file for this app
  └─ nestia.config.ts         # Config file for the Nestia CLI for Swagger gen
  └─ tsconfig.json            # Auto configured during npx nestia setup
```

## Setup

```shell
# If you don't already have the Nest CLI
npm i -g @nestjs/ci

# Create a normal Nest.js app
nest new nestia-api # (Or whatever you want to call your project)

# Install Nestia
yarn -D nestia@latest

# Run the setup wizard: https://nestia.io/docs/setup/#setup-wizard
npx nestia setup

# Install pg driver
yarn add pg
yarn add @types/pg

# Install Kysely
yarn add kysely

# Install Kysely-ctl
yarn add -D kysely-ctl
```

## Swagger

Nestia includes facilities for generating the OpenAPI spec file:

```shell
# Config for build time generation is in nestia.config.ts
npx nestia swagger

# To generate clients as well
npx nestia sdk
```

It can also generate SDK "packages"

## Resources

- [Nestia Docs](https://nestia.io/docs/pure/)
- [Typia Docs](https://typia.io/docs/validators/tags/)
- [Nestia Swagger](https://nestia.io/docs/swagger/)
- [Kysely vs Drizzle](https://www.reddit.com/r/node/comments/1c0776v/kysely_or_drizzle/)
- [Query Type Safety with Kysely](https://github.com/thetutlage/meta/discussions/8)
- [Kysely CTL](https://github.com/kysely-org/kysely-ctl)
- [Kysely in Action](https://marmelab.com/blog/2024/02/14/type-safe-sql-wheries-with-kysely.html)
- [Swagger Viewer](https://editor-next.swagger.io/)
