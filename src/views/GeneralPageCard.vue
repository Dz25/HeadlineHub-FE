<script>
import axios from 'axios';
import Card from '../components/Card.vue';
import Observer from '../components/Observer.vue';
export default {
  name: "CategoryView",
  props: {},
  data() {
    return {
      articles: [],
      currentPage: 1,
    };
  },
  methods: {
    async loadMoreArticles() {
      //waiting for router implementation
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=0ae32ab013894da3861579bca8de7c03&page=${this.currentPage}&pageSize=24`)
      const data = res.data
      const newArticles = data.articles
      this.currentPage++
      this.articles.push(...newArticles)
    }
  },
  components: {
    Card,
    Observer
  }
};
</script>

<template>
  <div>
    <div class="card-grid">
      <div v-for="article in articles" :key="article.author">
        <Card :article="article" />
      </div>
    </div>
    <Observer @intersect="loadMoreArticles" />
    <div class="text-center my-4">
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card-grid {
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