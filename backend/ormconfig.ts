export default {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'happy',
  migrations: ['./src/db/migrations/*.ts'],
  cli: {
    migrationsDir: './src/db/migrations',
  },
};
