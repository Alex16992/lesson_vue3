<template lang="">
    <div class="post">
        <div class="">
            <div class="">Название: {{ post.title }}</div>
            <div class="">Описание: {{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button>Удалить</my-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.post{
    padding: 15px;
    border: 2px solid #000;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>