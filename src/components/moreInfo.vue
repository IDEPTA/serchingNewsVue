<template>
  <div class="post-wrapper">
    <h2>{{ moreInfoData.title }}</h2>
    <img :src="moreInfoData.image" :alt="moreInfoData.source.name" />
    <p>Published: {{ moreInfoData.publishedAt }}</p>
    <p>{{ moreInfoData.content }}</p>
    <p>Source: {{ moreInfoData.source.name }}</p>
  </div>
</template>
<script>
import { useFilterStore } from "@/stores/filterStore";
import { useNewsStore } from "../stores/newsStore";
export default {
  data() {
    const newsStore = useNewsStore();
    const filterStore = useFilterStore();
    let moreInfoData = newsStore.posts[this.id];
    const filterWord = filterStore.filterWord;
    if (filterWord.length > 0) {
      moreInfoData = filterStore.filteredPosts[this.id];
    }
    return {
      moreInfoData,
      filterWord,
    };
  },
  props: {
    id: {
      type: Number,
    },
  },
};
</script>
<style scoped>
.post-wrapper {
  margin: 30px auto;
  padding: 20px;
  width: 50%;
  border-radius: 10px;
  position: relative;
  background-color: hsla(160, 100%, 37%, 0.2);
}
.post-wrapper img {
  width: 100%;
  border-radius: 10px;
  margin: 30px 0px;
}

@media (max-width: 800px) {
  .post-wrapper {
    width: 95%;
    padding: 10px;
    margin: 10px auto;
    font-size: 18px;
  }
}
</style>
