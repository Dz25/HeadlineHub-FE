<script>
import Card from "../components/Card.vue";
import Observer from "../components/Observer.vue";
import axios from "axios";
//  APIKey:"1943725d907ddb4c42da06fe1f30202a",
export default {
  name: "searchPage",

  data() {
    return {
      searchText: this.$route.params.searchedText,
      articles: [],
      currentPage: 1,
      loading: false,
      total: 0,
    };
  },
  methods: {
    async loadMoreArticles() {
      this.loading = true;
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${this.searchText}&apiKey=0ae32ab013894da3861579bca8de7c03&page=${this.currentPage}&pageSize=24`
      );
      const data = res.data;
      const newArticles = data.articles;
      this.total = data.totalResults;
      this.currentPage++;
      this.articles.push(...newArticles);
      this.loading = false;
    },
  },
  components: { Card, Observer },
};
</script>

<template>
  <div>
    <p class="text-center h1 mt-3">
      There are {{ total }} results for "{{ searchText }}"
    </p>
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

.pagination-num {
  text-align: center;
  margin: 20px;
}
</style>
