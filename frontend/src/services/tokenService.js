class TokenService {
    setUser(userToken){
        localStorage.setItem("user", JSON.stringify(userToken))
    }

    removeUser(){
        localStorage.removeItem("user")
    }
}