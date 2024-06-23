<template>
    <div class="login-container">
      <form @submit.prevent="login">
        <h2>Login</h2>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
  
        <button id="submit" type="submit">Login</button>
      </form>
      
      <div @click="redirectToRegister" id="signup" class="redirect">New user? Sign up</div>
     
      <Transition>
        <div v-if="message" class="alert" alert-danger role="alert">
        {{ message }}
        <span @click="closeAlert" class="close-button" aria-label="Close" aria-hidden="true">&times;
        </span>
        </div>
      </Transition>
      
    </div>
  </template>
  
  <script>
import authService from '../services/authService';

  export default {
    data() {
      return {
        username: '',
        password: '',
        message: '',
        user: '',
      }
    },
    methods: {
      async login() {
        try {
            const res = await authService.loginUser({
                username: this.username,
                password: this.password
            })
            if (res.code === 200){
              console.log("not failed :" + res.code)
              this.$store.dispatch('login', { token: res.token });
              this.$router.push('/');
            }
            else this.reset(res.message)
        } catch (error){
          console.log(error)
          this.reset('Internal Server Error')
        }
      },
      reset(errorMessage){
        this.message = errorMessage
        this.password = ''
      },
      closeAlert(){
        this.message = ''
      },
      redirectToRegister(){
        this.$router.push('/register');
      }
    },
    async mounted() {
    }
  };
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

form {
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #050714be;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.form-group {
margin-bottom: 15px;
}

.alert {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 13px 10px 13px;
  color: rgb(91, 0, 0);
  border: 2px solid rgba(146, 76, 98, 0.178);
  border-radius: 3px;
  background-color: rgba(187, 70, 70, 0.211);
  text-align: left;
  margin-right: -10px;
  margin-left: -18px;
  margin-top: 13px;
  box-shadow: 1px 1px 1px rgba(52, 50, 50, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14),
    0px 1px 5px rgba(0, 0, 0, 0.12);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.close-button {
  margin-right: 3px;
  margin-left: 8px;
  margin-bottom: 4px;
  color: rgba(91, 0, 0, 0.592);
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.6em;
}

.redirect:hover{
  color:rgb(156, 12, 12);
  cursor: pointer;
}
  </style>