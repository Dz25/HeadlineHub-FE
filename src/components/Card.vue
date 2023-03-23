<template>
  <div class="card">
    <img v-if="urlToImage" :src="urlToImage" class="card-img-top"  :alt=title />
    <img v-else src="../assets/img/Image_not_available.png" class="card-img-top"  :alt=title />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5> 
      <p class="card-text">{{ description }}</p>
      <p class="card-text"><small class="text-muted">{{ new Date(Date.parse(publishedAt)) }}</small></p>
      <p class="card-text"><small class="text-muted">By {{ author }}</small></p>
      <button class="btn btn-primary" @click="showModal">Read More</button>
      <ArticleModal ref="contentModal" :data=article :id=id :summary=summary />
      <LoadingModal ref="loadingModal"/>
    </div>
  </div>
</template>

<script setup>
import { toRefs, ref } from 'vue';
import ArticleModal from './ArticleModal.vue';
import LoadingModal from './LoadingModal.vue'

const props = defineProps({
  article: Object
})
const contentModal = ref(null)
const loadingModal = ref(null)
const id = crypto.randomUUID()
const summary = ref("")
const { author, title, url, description, urlToImage, publishedAt } = toRefs(props.article)

const showModal = async () => {
  const formdata = new FormData();
  formdata.append("key", "7eaa2e91d0e5ab1c39662ff390ebbe4b");
  formdata.append("url", url.value);
  formdata.append("sentences", "5");

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  loadingModal.value.show()
  const respone = await fetch("https://api.meaningcloud.com/summarization-1.0", requestOptions)
  const data = await respone.json()
  summary.value = data.summary
  loadingModal.value.hide()
  contentModal.value.show()
}

</script>