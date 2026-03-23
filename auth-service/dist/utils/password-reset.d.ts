export declare function generatePasswordResetToken(): string;
export declare function storePasswordResetToken(token: string, user: string, ttlMinutes: number): Promise<void>;
export declare function getPasswordResetUser(token: string): Promise<string | null>;
export declare function deletePasswordResetToken(token: string): Promise<boolean>;
//# sourceMappingURL=password-reset.d.ts.map