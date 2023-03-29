export default () => ({
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    user: process.env.REDIS_USER,
    password: process.env.REDIS_PWD,
    url: process.env.REDISCLOUD_URL,
  },
  auth: {
    secret: process.env.JWT_SECRET,
  },
  database: {
    table: process.env.SESSION_TABLE_NAME,
  },
});
