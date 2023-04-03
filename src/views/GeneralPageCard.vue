<script>
import axios from 'axios';
import Card from '../components/Card.vue';
export default {
  name: "CategoryView",
  props: {},
  data() {
    return {
      articles:[],
      currentPage:1,
    };
  },
  methods: {
    async loadMoreArticles() {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=bf5522d648c8464a91ab8cd337f590a8&page=${this.currentPage}`)
      const data = res.data
      const newArticles = data.articles
      this.currentPage ++
      this.articles.push(...newArticles)
    },
    handleScroll(e) {
      let element = this.$refs.scrollComponent
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        this.loadMoreArticles()
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
    this.loadMoreArticles()
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  components: {
    Card,
  }
};
</script>

<template>
  <div>
    <div class="card-grid" ref="scrollComponent">
      <div v-for="article in articles" :key="article.author">
        <Card :article="article" />
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