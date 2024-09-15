import { env } from '@/lib/env';  
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(env.NEXT_PUBLIC_DATABASE_URL);
export const db = drizzle(sql);