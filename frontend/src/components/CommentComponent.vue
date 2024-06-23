<template>
    <div>
        <div v-for="comment in comments">
            {{ comment.comment }}
            {{ comment.updatedAt }}
        </div>
    </div>
</template>

<script lang="ts">

import { Comment } from '@/models/models';
import { defineComponent, ref, watch } from 'vue';
import commentService from '@/services/comments/commentService';

export default defineComponent({
    props: {
        postId: {
            type: String,
            required: true
        }
    },
    data(){
        return {}
    },
    methods:{
       
    },
    setup(props) {
    const comments = ref<Comment[]>([]);

    watch(() => props.postId, async (postId) => {
        if (postId != null){
            const res = await commentService.getCommentsByPostId(postId);
            comments.value = res;
        }
    }, { immediate: true });
    return {
        comments
    };
    }
    
})
</script>

<style scoped>

</style>