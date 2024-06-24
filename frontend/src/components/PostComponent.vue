<template>
    <div class="post-container">
        <div class="username-title" v-if="user">{{ user.username }}</div>
        <div class="post-content">{{ post.content}}</div>
        <div class="datepost">{{ formatDate(post.createdAt) }}</div>
        <div class="comments-container">
          <div class="open-comment" @click="openComment" v-if="comments">Open comments ({{ arrayLength(comments)}})</div>
          <div class="new-comment" @click="openNewComment">Comment</div>
        </div>
        <div v-if="openNewCommentBoolean">
            <NewCommentComponent 
            :postId="post.id">
            </NewCommentComponent>
        </div>
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
import { Post, Comment } from '@/models/models';
import CommentComponent from './CommentComponent.vue';
import commentService from '@/services/comments/commentService';
import NewCommentComponent from './NewCommentComponent.vue';
import dateUtilities from '@/utilities/dateUtility';

export default defineComponent({
  components: {
    CommentComponent,
    NewCommentComponent
  },
  data(){
    return {
      commentBoolean: false,
      openNewCommentBoolean: false
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
      return dateUtilities.formatDate(date)
    },

    openComment(){
      console.log("open")
      this.commentBoolean = !this.commentBoolean
    },
    openNewComment(){
      this.openNewCommentBoolean = !this.openNewCommentBoolean
    },
    arrayLength(comment: Comment[]){
      return comment.length
    }
  },
  setup(props) {
  const comments = ref<Comment[]>([]);
  const user = ref();
  watch(() => props.post, async (newPost) => {
    const res = await userService.getUserbyId(newPost.userId);
    user.value = res;

    const resComments: Comment[] = await commentService.getCommentsByPostId(newPost.id);
    comments.value = resComments;
  }, { immediate: true });
  return {
    user,
    comments
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
  margin-top: 10px;
  font-size: x-large;
  font-weight: 600;
}
.comments-container{
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post-content, .new-comment{
  margin-top: 10px;
  margin-bottom: 10px;
}

.post-content {
  margin-top: 15px;
}

.new-comment{
  cursor: pointer;
  margin-right: 15px;
}
.open-comment{
  cursor: pointer;
}

.datepost{
  text-align: right;
  font-size: small;
}

</style>