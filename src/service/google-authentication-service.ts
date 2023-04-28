import { Authentication } from "src/interface/Authentication";
import { User } from "src/model/user";

class GoogleAuthenticationService implements Authentication {
    // Actual Google Oauth implementation
    login = (): Promise<User> => {
        const user: User = {
            userName: 'Google user',
            fullName: 'John Doe',
            roles: [],
            profilePicture: ''
        }
        return Promise.resolve(user);
    }

    isAuthenticated = () => true;
}

const googleAuthenticationService: GoogleAuthenticationService = new GoogleAuthenticationService();
export default googleAuthenticationService;