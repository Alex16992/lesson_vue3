<template lang="">
    <div class="app">
        <post-form @create="createPost"/>
        <post-list :posts="posts"/>
    </div>
</template>
<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
export default {
    components: {
        PostForm, PostList
    },
    data() {
        return{
            posts: [
                {id: 1, title: 'название', body: 'Описание поста'},
                {id: 2, title: 'название1', body: 'Описание поста1'},
                {id: 3, title: 'название2', body: 'Описание поста2'},
                {id: 4, title: 'название3', body: 'Описание поста3'},
            ],
        }
    },
    methods: {
        createPost(post){
            this.posts.push(post)
        },
    }
}
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app {
        padding: 30px;
    }
</style>