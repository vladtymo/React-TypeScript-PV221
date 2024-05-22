export interface RegisterModel {
    email: string;
    password: string;
    birthdate: Date;
    phoneNumber?: string;
}

export interface LoginModel {
    email: string;
    password: string;
}