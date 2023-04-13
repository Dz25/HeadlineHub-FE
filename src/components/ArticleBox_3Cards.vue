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
    `https://newsapi.org/v2/top-headlines?country=ca&category=${props.categories}&apiKey=0ae32ab013894da3861579bca8de7c03&pageSize=3`
  );
  // console.log(res.data)
  // console.log(article.value)
  await nextTick(() => {
    article.value = res.data.articles;
  });
});
</script>

<template>
  <div class="row">
    <div class="col">
      <Card :article="article[0]" :key="article[0]" />
    </div>
  </div>
  <div class="row pt-4 row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <Card :article="article[1]" :key="article[1]" class="h-100" />
    </div>
    <div class="col">
      <Card :article="article[2]" :key="article[2]" class="h-100" />
    </div>
  </div>
</template>
