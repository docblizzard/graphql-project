<template>
    <div class="top-menu">
      <nav>
        <ul class="mainmenu">
          <li @click="selectTab('/')" class="thrustmaster">Home</li>
          <li @click="selectTab('Logitech')" class="logitech">Logitech</li>
          <li @click="selectTab('Fanatec')" class="fanatec">Fanatec</li>
          <li @click="selectTab('Account')" class="parameters">Account</li>
          <li @click="logout()" id="logout" class="account">Log Out</li>
        </ul>
      </nav>
    </div>
</template>

<script>
import authService from '@/services/authService';


export default {
  data() {
    return {
      selectedTab: 'Thrustmaster',
    };
  },
  methods: {
    async logout() {
      try {
        await authService.logout(); 
        this.$store.dispatch('logout');
        this.$router.push('/login');
      } catch (error) {
        console.error("Logout error:", error);
      }
    },
    selectTab(tab) {
      this.selectedTab = tab;
      this.$router.push(tab.toLowerCase())
      console.log(tab)
    },
  },
};
</script>

<style scoped>
.top-menu {
  background-color: #050714d2;
  color: #fff;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  display: flex;
  /* justify-content: space-around; */

}

nav li {
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  max-width:10%;
  min-width:10%;  
}

.thrustmaster, .fanatec, .logitech{
  margin-right: 10px;
}

.parameters {
  margin-left: auto;
}

nav li:hover {
  background-color: #555;
}

nav li.active {
  background-color: #007BFF;
  font-weight: bold;
}
</style>