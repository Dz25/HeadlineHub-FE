<script setup>
import { onMounted, ref, defineProps, nextTick } from "vue";
import Card from "./Card.vue";
import axios from "axios";

const article = ref([]);

const props = defineProps({
  categories: String,
});

onMounted(async () => {
  let res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=ca&category=${props.categories}&apiKey=bf5522d648c8464a91ab8cd337f590a8&pageSize=4`
  );
  // console.log(res.data)
  // console.log(article.value)
  await nextTick(() => {
    article.value = res.data.articles;
  });
});
</script>

<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <Card :article="article[0]" :key="article[0]" class="h-100" />
    </div>
    <div class="col">
      <Card :article="article[1]" :key="article[1]" class="h-100" />
    </div>
    <div class="col">
      <Card :article="article[2]" :key="article[2]" class="h-100" />
    </div>
    <div class="col">
      <Card :article="article[3]" :key="article[3]" class="h-100" />
    </div>
  </div>
</template>
