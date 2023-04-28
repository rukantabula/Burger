import { User } from "src/model/user";

export interface Authentication {
    login: () => Promise<User>;
    isAuthenticated: () => boolean;
}