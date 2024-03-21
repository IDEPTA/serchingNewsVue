<template>
  <router-link
    class="postCard"
    :to="{
      name: 'moreinfo',
      params: { id },
    }"
  >
    <img :src="post.image" :alt="post.author" />
    <p>{{ post.title }}</p>
    <p>Source: {{ post.source.name }}</p>
  </router-link>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
    },
    id: {
      type: Number,
    },
  },
};
</script>
<style>
.postCard {
  margin: 10px;
  width: 400px;
}
.postCard img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
