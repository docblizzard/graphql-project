<template>
    <div>
			<form @submit.prevent="submitComment">
				<textarea class="post-input" type="text" id="post" v-model="comment" required 
						placeholder="Make a new post "></textarea>
			</form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Comment } from '@/models/models';
import commentService from '@/services/comments/commentService';

export default defineComponent({
	data() {
		return {
			comment: ''
		}
	},
	methods: {
		submitComment(){	
			
		}
	}
})

</script>

<style scoped>

form{
	display: flex;
	flex-direction: column;
}

.post-input{
	border: none;
	height: 100px;
}
</style>