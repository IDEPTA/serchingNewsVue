import { defineStore } from "pinia";
import { useNewsStore } from "./newsStore";
export const useFilterStore = defineStore("filterStore", {
  state: () => ({
    filteredPosts: [],
  }),
  actions: {
    getPostValue(value) {
      const newsStore = useNewsStore();
      let result = newsStore.posts.filter((el) =>
        el.title.toLowerCase().includes(value.toLowerCase())
      );
      this.filteredPosts = result;
    },
  },
});
