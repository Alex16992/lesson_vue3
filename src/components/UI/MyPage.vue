<template>
    <div class="page__wrapper">
        <div v-for="pageNumber in totalPages" :key="page" :class="{'current-page': page === pageNumber}" @click="changePage(pageNumber)" class="page">{{ pageNumber }}</div>
    </div>
</template>
<script>
export default {
  name: 'my-page',
  props: {
    page: {
      type: Number,
    },
    totalPages: {
      type: Array,
      default: () => [],
    },
    changePage: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style scoped>
.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid black;
    padding: 10px;
}

.current-page {
    border: 2px solid teal;
}
</style>