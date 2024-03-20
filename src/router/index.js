import { createRouter, createWebHistory } from "vue-router";
import moreInfo from "../components/moreInfo.vue";
import mainBlock from "../components/mainBlock.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/moreinfo/:id",
      name: "moreinfo",
      component: moreInfo,
      props: true,
    },
    {
      path: "",
      name: "home",
      component: mainBlock,
    },
  ],
});

export default router;
