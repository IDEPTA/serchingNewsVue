import { defineStore } from "pinia";
import { useFilterStore } from "./filterStore";
export const useNewsStore = defineStore("newsStore", {
  state: () => ({
    posts: [],
    isLoading: true,
  }),
  actions: {
    async getNews() {
      const filterStore = useFilterStore();
      if (this.posts.length == 0) {
        this.isLoading = true;
        let apiKey = "4a2be37a0d4b93d0b59bcdb65ff3380a";
        const url =
          "https://gnews.io/api/v4/search?q=example&lang=en&country=uk&max=15&sortBy&apikey=" +
          apiKey;
        let news = await (await fetch(url)).json();
        let result = news.articles;
        result.forEach((element) => {
          this.posts.push(element);
          filterStore.filteredPosts.push(element);
        });
        this.isLoading = false;
      }
    },
  },
});
