<script setup>
import { ref, onMounted } from "vue";
import SavedArticleCard from "../components/SavedArticleCard.vue";
import axios from "axios";

const savedArticles = ref();
const userId = ref();
const handleDelete = async (id) => {
  let res = await axios.delete(`http://localhost:8080/api/users/${userId.value}/articles/${id}`)
  res.status == 200 ? getArticles() : ""
}
const getArticles = async () => {
  let res = await axios.get(`http://localhost:8080/api/users/${userId.value}/articles`);
  console.log(res.data);
  savedArticles.value = res.data;
}

onMounted(async () => {
  userId.value = localStorage.getItem("userId");
  getArticles()
});
</script>
  
<template>
  <div class="container-fluid">
    <div class="row px-4 py-4" style="background-color: #f4e4c1">
      <h1 class="mx-3" style="color: #05668d; font-weight: bold">
        Saved Articles
      </h1>

      <!-- use the savedArticles, saveArticle, and formattedSavedArticles variables here -->
      <!-- <ArticleModal @save="saveArticle" /> -->

      <div v-if="savedArticles">
        <div v-for="(article, index) in savedArticles" :key="article.id">
          <!-- The article from the database include title, summary, url, urlToImage, no need to pass summary -->
          <SavedArticleCard :data="article" @deleteArticle="handleDelete(article.id)" />
        </div>
      </div>
      <div v-else>
        <p>No saved articles yet.</p>
      </div>
    </div>
  </div>
</template>

<style></style>
