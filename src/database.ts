import {
  DummyDriver,
  PostgresAdapter,
  PostgresIntrospector,
  PostgresQueryCompiler,
} from 'kysely';
import { Kysely } from 'kysely';
import { DB } from './model';

export const db = new Kysely<DB>({
  dialect: {
    createAdapter() {
      return new PostgresAdapter();
    },
    createDriver() {
      return new DummyDriver(); // Use dummy just to get the dev time for now
    },
    createIntrospector(db) {
      return new PostgresIntrospector(db);
    },
    createQueryCompiler() {
      return new PostgresQueryCompiler();
    },
  },
});
