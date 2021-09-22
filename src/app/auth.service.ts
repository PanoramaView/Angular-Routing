/* fake server */
export class AuthService {
    loggedIn = false;

    // check the state 
    isAuthenticated() {
        //to fake that it takes some time to connect to the server
        const promise = new Promise (
            (resolve, reject) => {
                // after 800ms it provides a promise(a boolean)
                setTimeout(() =>{
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }
    logout() {
        this.loggedIn = false;
    }
}