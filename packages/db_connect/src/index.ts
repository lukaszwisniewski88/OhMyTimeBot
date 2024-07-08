import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schemas';
export const client = createClient({
  url: process.env.DB_URL as string,
  authToken: process.env.DB_TOKEN
});

export const db = drizzle(client, {
  schema: schema
});
export * from './schemas/index';
