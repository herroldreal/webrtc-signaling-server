export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
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
  rtc: {
    ttl: process.env.RTC_TTL,
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
