<template lang="">
    <h2>Создать пост</h2>
    <form @submit.prevent>
        <my-input v-focus v-model="post.title" type="text" placeholder="Название"></my-input>
        <my-input v-model="post.body" type="text" placeholder="Описание"></my-input>
        <my-button @click="createPost" style="margin-top: 15px">Создать</my-button>
    </form> 
</template>
<script>
export default {
    data(){
        return{
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods:{
        createPost(){
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>
<style scoped>
form{
    display: flex;
    flex-direction: column;
}

</style>