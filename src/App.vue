<template lang="">
    <div>
        <div v-for="post in posts" class="post">
            <div class="">Название: {{ post.title }}</div>
            <div class="">Описание: {{ post.body }}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            posts: [
                {id: 1, title: 'название', body: 'Описание поста'},
                {id: 2, title: 'название1', body: 'Описание поста1'},
                {id: 3, title: 'название2', body: 'Описание поста2'},
                {id: 4, title: 'название3', body: 'Описание поста3'},
            ]
        }
    },
    methods: {
        
    }
}
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .post{
        padding: 15px;
        border: 2px solid #000;
        margin: 10px;
    }
</style>