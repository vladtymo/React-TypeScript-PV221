import { JwtPayload, jwtDecode } from "jwt-decode";
import { AccessTokenPayload, TokenModel } from "../models/tokens.model";

const accessKey = process.env.REACT_APP_ACCESS_TOKEN_KEY;
const refreshKey = process.env.REACT_APP_REFRESH_TOKEN_KEY;

export const tokensService = {
    save: function (model: TokenModel) {
        if (accessKey) localStorage.setItem(accessKey, model.accessToken);
        if (refreshKey) localStorage.setItem(refreshKey, model.refreshToken);
    },
    clear: function () {
        if (accessKey) localStorage.removeItem(accessKey);
        if (refreshKey) localStorage.removeItem(refreshKey);
    },
    getAccessToken: function () {
        if (!accessKey) return null;
        return localStorage.getItem(accessKey);
    },
    getRefreshToken: function () {
        if (!refreshKey) return null;
        return localStorage.getItem(refreshKey);
    },
    getAccessTokenPayload: function (): AccessTokenPayload | null {

        const token = this.getAccessToken();

        if (!token) return null;

        try {
            const payload = jwtDecode(token);

            return {
                email: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress' as keyof JwtPayload] as string,
                id: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier' as keyof JwtPayload] as string,
                dateOfBirth: new Date(payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/dateofbirth' as keyof JwtPayload] as string),
                role: payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role' as keyof JwtPayload] as string
            };

        } catch (Error) {
            return null;
        }
    }
}