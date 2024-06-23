<template>
    <div class="top-menu">
      <nav>
        <ul class="mainmenu">
          <li @click="selectTab('/')" class="tablink thrustmaster">Home</li>
          <li @click="selectTab('Account')" class="tablink parameters">Welcome {{ user.username }}<br> Account and parameters</li>
          <li @click="logout()" id="logout" class="tablink account">Log Out</li>
        </ul>
      </nav>
    </div>
</template>

<script lang="ts">
import authService from '@/services/authService';
import userService from '@/services/users/userService';
import { User } from '@/models/models';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      selectedTab: '',
      user: {} as User
    };
  },
  methods: {
    async logout() {
      try {
        await authService.logout();
        this.$router.push('/login');
      } catch (error) {
        console.error("Logout error:", error);
      }
    },
    selectTab(tab: string) {
      this.selectedTab = tab;
      this.$router.push(tab.toLowerCase())
    },
  },

  async mounted() {
    const token = localStorage.getItem('user')
    if (token !== null) {
      const res = await userService.getUserbyToken(token);
      this.user = res
  }
  }
})

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

.tablink{
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-grow: 1;
  text-align: center; */
}
.parameters {
  margin-left: auto;
  text-align: left;
}

nav li:hover {
  background-color: #555;
}

nav li.active {
  background-color: #007BFF;
  font-weight: bold;
}
</style>