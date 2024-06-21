import http from './api'
// import axios from 'axios'
import store from '@/store/vuex'

class authService {
    getUsers(){
        return http.get('/users')
        .then()
        .catch(error => {
            return error
        })
    }
    loginUser(userCreds) {
      return http.post('/auth/login', userCreds)
          .then(response => response.data)
          .catch(error => {
              if (error.response) {
                console.log(error.response)
                  throw error;
              } else {
                  throw error;
              }
          });
  }
    async logout() {
        try {
          await http.post('/auth/logout');
          localStorage.removeItem('user');
          store.dispatch('logout');

        } catch (error) {
          console.error('Logout error:', error.response.data);
          throw error; 
        }
      }
  registerUser(userCreds){
    return http.post('/auth/register', userCreds)
    .then(response => response.data)
          .catch(error => {
              if (error.response) {
                console.log(error)
                  throw error;
              } else {
                  throw error;
              }
          });
  }
}

export default new authService();