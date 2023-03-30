<script>
import Card from "../components/Card.vue";
import axios from "axios";
//  APIKey:"1943725d907ddb4c42da06fe1f30202a",
export default {
  name: "business",
  props: { catagory:  String},
  data() {
    return {
      articles: [],
      currentPage: 1,
      totalPages: null,
    };
  },watch: {
    catagory: function(newValue, oldValue) {
      // Trigger a full page reload when the message prop changes
      if (newValue !== oldValue) {
        window.location.reload();
      }
    },
  },
  mounted() {
    this.fetchNews(this.currentPage);
  },
  methods: {
    fetchNews(page) {
      const apiKey = "9b36dcd8d2c749b7994e5a59abcb3c81";
      const url = `https://newsapi.org/v2/top-headlines?category=${this.catagory}&language=en&apiKey=${apiKey}&page=${page}`;
      axios
        .get(url)
        .then((response) => {
          this.articles = response.data.articles;
          this.totalPages = Math.ceil(response.data.totalResults / 20); // assuming 20 articles per page
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: { Card },
};
</script>

<template>
  <div>
    <div class="card-grid">
      <div v-for="article in articles" :key="index">
        <Card :article="article" />
        <h4>{{ catagory }}</h4>
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
