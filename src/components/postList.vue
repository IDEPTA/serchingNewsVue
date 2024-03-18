<template>
  <div class="postList">
    <postCard
      v-for="(post, index) in postsToDisplay()"
      :post="post"
      :key="index"
      :id="index"
    />
    <p v-if="filterStore.filteredPosts.length == 0 && !newsStore.isLoading">
      Nothing :(
    </p>
    <p v-else-if="newsStore.isLoading">Loading...</p>
  </div>
</template>
<script>
import postCard from "./postCard.vue";
import { useNewsStore } from "../stores/newsStore";
import { useFilterStore } from "@/stores/filterStore";

export default {
  data() {
    const newsStore = useNewsStore();
    const filterStore = useFilterStore();
    return {
      newsStore,
      filterStore,
    };
  },
  mounted() {
    this.newsStore.getNews();
  },
  components: {
    postCard,
  },
  methods: {
    postsToDisplay() {
      if (
        this.filterStore.filteredPosts.length == this.newsStore.posts.length
      ) {
        return this.newsStore.posts;
      } else {
        return this.filterStore.filteredPosts;
      }
    },
  },
};
</script>
<style>
.postList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
