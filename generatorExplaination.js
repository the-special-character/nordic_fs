class Auth {
#login() {
    console.log("login successfully");

}

#logout(){
    console.log("logout successfully");
}

*authFlow() {
    yield this.#login();
    yield this.#logout();
}
}

const auth = new Auth();

const authFlow =auth.authFlow();

authFlow.next()
authFlow.next()