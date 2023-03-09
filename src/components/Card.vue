<template>
  <div class="card">
    <img :src=urlToImage class="card-img-top" :alt=title />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <p class="card-text"><small class="text-muted">{{ new Date(Date.parse(publishedAt)) }}</small></p>
      <p class="card-text"><small class="text-muted">By {{ author }}</small></p>
      <button class="btn btn-primary" @click="showModal">Read More</button>
      <ArticleModal ref="thisModal" :data=article :id=id :summary=summary />
    </div>
  </div>
</template>
  
<!-- <template>
    <div class="card border-0 rounded-0">
        <img src="../assets/img/post-landscape-1.jpg" class="card-img-top " alt="...">
        <div class="card-body">
            <h5 class="card-title">News Story title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template> -->

<script setup>
import { toRefs, ref } from 'vue';
import ArticleModal from './ArticleModal.vue';

const props = defineProps({
  article: Object
})
const thisModal= ref(null)
const id = crypto.randomUUID()
const summary = ref("")
const { author, title, description, urlToImage, publishedAt } = toRefs(props.article)

const showModal = async () => {
  const formdata = new FormData();
  formdata.append("key", "7eaa2e91d0e5ab1c39662ff390ebbe4b");
  formdata.append("url", "https://www.wired.com/story/oneplus-pad-android-tablet/");
  formdata.append("sentences", "5");

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  const respone = await fetch("https://api.meaningcloud.com/summarization-1.0", requestOptions)
  const data = await respone.json()
  console.log(data)
  summary.value = data.summary
  thisModal.value.show()
}

</script>