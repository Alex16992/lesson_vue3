<template lang="">
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button'
}
</script>
<style scoped>
.btn{
    align-self: center;
    background: none;
    padding: 10px 15px;
}

.btn:hover{
    cursor: pointer;
}
</style>