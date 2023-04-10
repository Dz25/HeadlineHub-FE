<script>
import axios from "axios";
import Card from "../components/Card.vue";
import Observer from "../components/Observer.vue";
export default {
  name: "GeneralPageCard",
  props: { category: String },
  data() {
    return {
      articles: [],
      currentPage: 1,
      loading: false,
    };
  },
  methods: {
    async loadMoreArticles() {
      this.loading = true;
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=ca&category=${this.category}&apiKey=0ae32ab013894da3861579bca8de7c03&page=${this.currentPage}&pageSize=24`
      );
      const data = res.data;
      const newArticles = data.articles;
      this.currentPage++;
      this.articles.push(...newArticles);
      this.loading = false;
    },
  },
  components: {
    Card,
    Observer,
  },
};
</script>

<template>
  <div>
    <div class="card-grid">
      <div v-for="(article, index) in articles" :key="index">
        <Card :article="article" />
      </div>
    </div>
    <Observer @intersect="loadMoreArticles" />

    <div class="text-center my-4" v-if="loading">
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-grid {
  margin-top: 3em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
.active {
  background-color: #ccc;
}
</style>
