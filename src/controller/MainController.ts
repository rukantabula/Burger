import { User } from 'src/model/user';
import appleAuthenticationService from 'src/service/apple-authentication-service';
import googleAuthenticationService from 'src/service/google-authentication-service';
import microsoftAuthenticationService  from '../service/microsoft-authenication-service';

export const loginWithMicrosoft = (): Promise<User> => microsoftAuthenticationService.login();
export const isAuthenticatedWithMicrosoft = (): boolean => microsoftAuthenticationService.isAuthenticated();

export const loginWithGoogle = (): Promise<User> => googleAuthenticationService.login();
export const isAuthenticatedWithGoogle = (): boolean => googleAuthenticationService.isAuthenticated();

export const loginWithApple = (): Promise<User> => appleAuthenticationService.login();
export const isAuthenticatedWithApple = (): boolean => appleAuthenticationService.isAuthenticated();