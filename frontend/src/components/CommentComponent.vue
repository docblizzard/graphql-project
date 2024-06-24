<template>
    <div v-if="postId" >
        <div v-for="comment in comments" :key="comment.id">
            <div class="comment-content">
                <div class="username" v-if="users[comment.userId]">
                    {{ users[comment.userId].username }}
                </div>
                <div class="comment">
                    {{ comment.comment }}
                </div>
                <div class="datepost">
                    {{ formatDate(comment.createdAt) }}
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        Pas de commentaires
    </div>
</template>

<script lang="ts">

import { Comment, User } from '@/models/models';
import { defineComponent, ref, watch } from 'vue';
import commentService from '@/services/comments/commentService';
import userService from '@/services/users/userService';
import dateUtilities from '@/utilities/dateUtility';

export default defineComponent({
    props: {
        postId: {
            type: String,
            required: true
        }
    },
    methods:{
        formatDate(date: Date){
            return dateUtilities.formatDate(date)
        },
    },
    
    setup(props) {
        const comments = ref<Comment[]>([]); 
        const users = ref<{ [userId: string]: User }>({});

        watch(() => props.postId, async (postId) => {
            if (postId != null){
                const resComments: Comment[] = await commentService.getCommentsByPostId(postId);
                comments.value = resComments;

                const uniqueUserIds = Array.from(new Set(resComments.map(comment => comment.userId)));
                for (const userId of uniqueUserIds) {
                  if (!users.value[userId]) {
                    const user = await userService.getUserbyId(userId);
                    users.value[userId] = user;
                  }
                }
            }
        }, { immediate: true });
        return {
            users,
            comments,
        };
    }
})
</script>

<style scoped>
.comment-content{
    border: 1px solid rgba(245, 245, 245, 0.377);
    border-radius: 0px 6px 6px 6px;
    background-color: rgba(216, 216, 216, 0.438);
    margin-top: 10px;
    padding: 5px;
}

.datepost{
  text-align: right;
  font-size: small;
}

.username{
    font-size:large;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 5px;
}

.comment, .username {
    margin-left: 10px;
}
</style>