import { JwtPayload } from 'jsonwebtoken';
export interface AuthenticatedUserPayload extends JwtPayload {
    sub: string;
    email: string;
    name: string;
}
//# sourceMappingURL=auth.types.d.ts.map