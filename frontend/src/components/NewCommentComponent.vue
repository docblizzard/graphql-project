<template>
    <div class="newpost-container">
			<form @submit.prevent="submitComment">
				<textarea class="post-input" type="text" id="post" v-model="comment" required 
						placeholder="Make a new comment "></textarea>
						<button class="button" id="submit" type="submit">Comment</button>
			</form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Comment } from '@/models/models';
import commentService from '@/services/comments/commentService';

export default defineComponent({
	props: {
		postId: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			comment: ''
		}
	},
	methods: {
		async submitComment(){	
			try {
            const res = await commentService.createComment({
				comment: this.comment, postId: this.postId })
            if (res.code === 201){
				this.comment = '';
				window.location.reload()
            }
        } catch (error){
          console.log(error)
        }
		}
	}
})

</script>

<style scoped>

.newpost-container{
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  /* border: 1px solid rgb(97, 97, 97); */
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
	/* height: 100px; */
}
</style>