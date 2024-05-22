export interface TokenModel {
    accessToken: string;
    refreshToken: string;
}

export interface AccessTokenPayload {
    email: string;
    id: string;
    dateOfBirth: Date;
    role: string;
}