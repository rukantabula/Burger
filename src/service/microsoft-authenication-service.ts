import { Authentication } from "src/interface/Authentication";
import { User } from "src/model/user";

class MicrosoftAuthenticationService implements Authentication {
    // Actual Microsoft Oauth implementation
    login = (): Promise<User> => {
        const user: User = {
            userName: 'Microsoft user',
            fullName: 'John Doe',
            roles: [],
            profilePicture: ''
        }
        return Promise.resolve(user);
    }

    isAuthenticated = () => true;
}

const microsoftAuthenticationService: MicrosoftAuthenticationService = new MicrosoftAuthenticationService();
export default microsoftAuthenticationService;