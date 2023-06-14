interface IAuthenticator{
    authenticate (username: string, password: string): boolean;
}

class Authenticator implements IAuthenticator{
    authenticate (username: string, password: string): boolean{
        if(username && password){
            return true;
        };
        return false;
    }
}

interface IUserRepository{
    saveAuthenticatedUser(username: string): void;
}

class UserRepository implements IUserRepository{
    saveAuthenticatedUser(username: string): void{
        console.log(username);
    }
}

class AuthController{
    private authenticator: IAuthenticator;
    private userRepository: IUserRepository; 

    constructor(authenticator: IAuthenticator, userRepository: IUserRepository){
        this.authenticator = authenticator;
        this.userRepository = userRepository;
    }

    login(username: string, password: string){
        if(this.authenticator.authenticate(username, password)){
            this.userRepository.saveAuthenticatedUser(username);
            return true;
        }else return false;
    }
}

const myAuthenticator = new Authenticator();
const myUserRepository = new UserRepository();
const myAuthController = new AuthController(myAuthenticator, myUserRepository);

myAuthController.login('Samira', '123');