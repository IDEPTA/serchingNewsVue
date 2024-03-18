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
      this.isLoading = true;
      const date = new Date();
      const yaer = date.getUTCFullYear();
      const month = date.getUTCMonth();
      const day = date.getUTCDate();
      const url = `https://newsapi.org/v2/everything?domains=wsj.com&from=${yaer}-${month}-${day}&sortBy=publishedAt&apiKey=b17856157d1241779d2d2620672c3fde`;
      let news = await (await fetch(url)).json();
      let result = news.articles;
      result.forEach((element) => {
        if (element.urlToImage != null) {
          this.posts.push(element);
          filterStore.filteredPosts.push(element);
        }
      });
      this.isLoading = false;
    },
  },
});
