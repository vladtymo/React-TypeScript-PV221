import axios from "axios";
import { LoginModel, RegisterModel } from "../models/accounts.model";
import { tokensService } from "./tokens.service";
import { TokenModel } from "../models/tokens.model";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "accounts"
});

// ----- create service object
export const accountsService = {
    register: function (model: RegisterModel) {
        return api.post("register", model);
    },
    login: function (model: LoginModel) {
        return api.post<TokenModel>("login", model);
    },
    logout: async function () {
        const refreshToken = tokensService.getRefreshToken();
        tokensService.clear();

        if (refreshToken) {
            return await api.post("logout", { refreshToken });
        }
    }
}
