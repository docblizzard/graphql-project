<template>
  <div class="home">
    <NewPostComponent @createdPost="fetchPosts"></NewPostComponent>
    <PostComponent v-for="post in post"
      :key="post.id"
      :post="post"></PostComponent>
  </div>
</template>

<script lang="ts">
import PostComponent from '@/components/PostComponent.vue'
import postService from '@/services/posts/postService';
import NewPostComponent from '@/components/NewPostComponent.vue';
import { defineComponent } from 'vue';
import { Post } from '@/models/models';

export default defineComponent({
  components: {
    PostComponent,
    NewPostComponent
  },
  data() {  
    return {
      post: [] as Post[]
    }
  },
  methods: {
    async fetchPosts(){
      const fetchPost = await postService.getPosts();
        if (fetchPost.code === 201) {
            this.post = fetchPost.post
        }
        else {
            console.log("fail")
        }
    }
  },
  async mounted() {
    this.fetchPosts()
    }

});

</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  min-height: 88vh;
}
</style>