<template>
  <div class="wrapper-app">
    <h2>News</h2>
    <input
      type="text"
      placeholder="Search news"
      class="input"
      v-on:input="getPostValue(filterStore.filterWord)"
      v-model="filterStore.filterWord"
    />
    <br /><postList />
  </div>
</template>
<script>
import postList from "./postList.vue";
import { useNewsStore } from "../stores/newsStore";
import { useFilterStore } from "../stores/filterStore";

export default {
  setup() {
    const newsStore = useNewsStore();
    const filterStore = useFilterStore();

    const getPostValue = (value) => {
      filterStore.getPostValue(value); // вызываем метод через скобки
    };

    return {
      newsStore,
      filterStore,
      getPostValue,
    };
  },
  components: {
    postList,
  },
};
</script>

<style scoped>
.wrapper-app {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input {
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
}
</style>
