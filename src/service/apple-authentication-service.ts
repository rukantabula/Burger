import { Authentication } from "src/interface/Authentication";
import { User } from "src/model/user";

class AppleAuthenticationService implements Authentication {
    // Actual Apple Oauth implementation
    login = (): Promise<User> => {
        const user: User = {
            userName: 'Apple user',
            fullName: 'John Doe',
            roles: [],
            profilePicture: ''
        }
        return Promise.resolve(user);
    }

    isAuthenticated = () => true;
}

const appleAuthenticationService: AppleAuthenticationService = new AppleAuthenticationService();
export default appleAuthenticationService;