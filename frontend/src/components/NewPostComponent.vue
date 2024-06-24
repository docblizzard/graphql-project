<template>
    <div class="newpost-container">
        <form @submit.prevent="submitPost">
            <textarea class="post-input" type="text" id="post" v-model="content" required 
						placeholder="Make a new post "></textarea>
						<button class="button" id="submit" type="submit">Post</button>
        </form>
    </div>
</template>

<script lang="ts">
import postService from '@/services/posts/postService';
import { defineComponent } from 'vue';

export default defineComponent({
  data(){
    return {
			content:''
    }
  },
	methods: {
		async submitPost(){
			try {
            const res = await postService.createPost({
                content: this.content })
            if (res.code === 201){
							this.content = '';
							this.$emit('createdPost');
							window.location.reload()
            }
        } catch (error){
          console.log(error)
        }
		}
	},
})
</script>

<style scoped>
.newpost-container{
  display: flex;
  flex-direction: column;
	width: 40%;
  border-radius: 8px;
  border: 1px solid rgb(97, 97, 97);
  padding: 10px;
}

.button {
	margin-top: 20px;
  padding: 10px;
	width: 20%;
  background-color: #050714be;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
	align-self: flex-end;
}

form{
	display: flex;
	flex-direction: column;
}

.post-input{
	border: none;
	height: 100px;
}
</style>