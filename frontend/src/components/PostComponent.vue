<template>
    <div class="post-container">
        <div class="username-title" v-if="user">{{ user.username }}</div>
        <!-- <div>{{ post.title}}</div> -->
        <div class="post-content">{{ post.content}}</div>
        {{  post.createdAt }}
        {{ formatDate(post.createdAt) }}
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import userService from '@/services/users/userService';

export default {
    props: {
        post: {
          type: Object,
          required: true
        }
    },
    methods: {
      formatDate(date){
        const dateformat = new Date(date)
        return dateformat
      }
    },
    setup(props) {
    // Define a reactive reference to hold the user data
    const user = ref();

    watch(() => props.post, async (newPost) => {
      const res = await userService.getUserbyId(newPost.userId);
      user.value = res;

    }, { immediate: true });
    return {
      user
    };
  }
}
</script>

<style scoped>

.post-container{
  border-radius: 8px;
  border: 1px solid rgb(97, 97, 97);
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: 10px;
  padding: 20px;
  padding-top: 5px;
}

.username-title{
  font-size: x-large;
  font-weight: 700;
}

.post-content{
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>