<template>
  <div class="home">
    <NewPostComponent @createdPost="fetchPosts"></NewPostComponent>
    <PostComponent v-for="post in post"
      :key="post.id"
      :post="post"></PostComponent>
  </div>
</template>

<script>
import PostComponent from '@/components/PostComponent.vue'
import postService from '@/services/posts/postService';
import NewPostComponent from '@/components/NewPostComponent.vue';

export default {
  components: {
    PostComponent,
    NewPostComponent
  },
  data() {
    return {
      post: []
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

};

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