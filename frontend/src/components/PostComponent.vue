<template>
    <div class="post-container">
        <div class="username-title" v-if="user">{{ user.username }}</div>
        <div class="post-content">{{ post.content}}</div>
        {{  post.createdAt }}
        {{ formatDate(post.createdAt) }}
        <div @click="openComment">Ouvrir les commentaires</div>
        <div v-if="commentBoolean">
          <CommentComponent
          :postId="post.id">
          </CommentComponent>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import userService from '@/services/users/userService';
import { Post } from '@/models/models';
import CommentComponent from './CommentComponent.vue';
import commentService from '@/services/comments/commentService';

export default defineComponent({
  components: {
    CommentComponent
  },
  data(){
    return {
      commentBoolean: false
    }
  },
  props: {
    post: {
      type: Object as () => Post,
      required: true
      }
  },
  methods: {
    formatDate(date: Date){
      const dateformat = new Date(date)
      
      return dateformat
    },
    openComment(){
      console.log("open")
      this.commentBoolean = !this.commentBoolean
    }
  },
  setup(props) {
  // Define a reactive reference to hold the user data
  const user = ref();
  watch(() => props.post, async (newPost) => {
    const res = await userService.getUserbyId(newPost.userId);
    user.value = res;

    const resf = await commentService.getCommentsByPostId(newPost.id);
    console.log(resf)
    
  }, { immediate: true });
  return {
    user
  };
  }
})
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