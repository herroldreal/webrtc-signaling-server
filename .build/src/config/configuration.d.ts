declare const _default: () => {
    port: number;
    redis: {
        host: string | undefined;
        port: string | undefined;
        user: string | undefined;
        password: string | undefined;
        url: string | undefined;
    };
    auth: {
        secret: string | undefined;
    };
    rtc: {
        ttl: string | undefined;
    };
    database: {
        host: string | undefined;
        port: number;
    };
};
export default _default;
