export interface AuthRuntimeConfig {
    jwtSecret: string;
    jwtAccessExpiresIn: string;
    refreshTokenTtlDays: number;
}
export declare function getAuthRuntimeConfig(): AuthRuntimeConfig;
//# sourceMappingURL=auth.config.d.ts.map