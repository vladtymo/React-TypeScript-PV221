import axios from "axios";
import { RegisterModel } from "../models/accounts.model";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "accounts"
});

// ----- create service object
export const accountsService = {
    register: function (model: RegisterModel) {
        return api.post("register", model);
    }
}
