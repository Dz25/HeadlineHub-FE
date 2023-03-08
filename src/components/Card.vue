<script setup>
import { toRefs,ref } from 'vue';
import axios from 'axios';
import ArticleModal from './ArticleModal.vue';

  const props = defineProps({
    article: Object
  })
  // const summary = ref()
  // const handleModal = () =>{
  //   let formData = new FormData()
  //   formData.append("key", "7eaa2e91d0e5ab1c39662ff390ebbe4b")
  //   formData.append("url", url)
  //   formData.append("sentences", 5)
  //   axios.post('https://api.meaningcloud.com/summarization-1.0', formData)
  // .then(response => {
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   console.log(error);
  // });

    
  // }

  const id = crypto.randomUUID();
  const {author,title, description, urlToImage, publishedAt } = toRefs(props.article)
  
</script>

<template>
    <div class="card">
      <img :src=urlToImage class="card-img-top" :alt=title />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <p class="card-text"><small class="text-muted">{{ new Date(Date.parse(publishedAt)) }}</small></p>
        <p class="card-text"><small class="text-muted">By {{ author }}</small></p>
        <button class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#article'+id" @click="handleModal">Read More</button>
        <ArticleModal :data=article :id = id />
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