<script>
  export default {
    props: {
      source: {
        type: Object,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      urlToImage: {
        type: String,
        required: true
      },
      publishedAt: {
        type: String,
        required: true
      }
    }
  }
</script>

<template>
    <div class="card">
      <img :src="urlToImage" class="card-img-top" :alt="title" />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <p class="card-text"><small class="text-muted">{{ publishedAt }}</small></p>
        <p class="card-text"><small class="text-muted">By {{ author }}</small></p>
        <a :href="url" target="_blank" class="btn btn-primary">Read More</a>
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