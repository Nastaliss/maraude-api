import { ConnectionOptions } from 'typeorm';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass',
  database: 'maraude',
  entities: [],
  // DISABLE WHEN IN PRODUCTION
  synchronize: true,
  // ENABLE WHEN IN PRODUCTION
  // migrations: ['dist/migrations/*{.ts, .js}'],
  // migrationsTableName: 'migrations_typeorm',
  // migrationsRun: true,
} as ConnectionOptions;
