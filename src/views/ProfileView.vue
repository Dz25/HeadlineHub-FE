<script setup>
import { ref, computed, onMounted } from 'vue';
import Card from '../components/Card.vue'
import ArticleModal from '../components/ArticleModal.vue';
import SavedArticleCard from '../components/SavedArticleCard.vue'
import axios from 'axios';

const savedArticles = ref([]);
const saveArticle = (article) => {
    savedArticles.value.push(article);
};
const formattedSavedArticles = computed(() => {
    // format the saved articles here if necessary
    return savedArticles.value;
});

</script>


<template>
    <div class="container-fluid">
        <div class="row px-4 py-4" style="background-color: #F4E4C1;">
            <h1 class="mx-3" style="color:#05668D; font-weight: bold;">Saved Articles</h1>

            <SavedArticleCard />

            <!-- use the savedArticles, saveArticle, and formattedSavedArticles variables here -->
            <!-- <ArticleModal @save="saveArticle" /> -->


            <div v-if="savedArticles.length > 0">
                <div v-for="(article, index) in savedArticles" :key="index">
                    <NewsCard :data="article" :id="index" :summary="article.description" />
                </div>
            </div>
            <div v-else>
                <p>No saved articles yet.</p>
            </div>

        </div>
    </div>
</template>

<style></style>