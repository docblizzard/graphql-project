class TokenService {
    setUser(userToken: string){
        localStorage.setItem("user", JSON.stringify(userToken))
    }

    removeUser(){
        localStorage.removeItem("user")
    }
}