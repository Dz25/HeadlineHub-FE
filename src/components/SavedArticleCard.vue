<script setup>
import { toRefs, ref } from "vue";
import axios from "axios";

const props = defineProps({
  data: Object,
});
const { id, summary, title, url, urlToImage } = toRefs(props.data);
</script>

<template>
  <div class="card m-3">
    <div class="row g-0">
      <div class="col-md-5">
        <img
          v-if="urlToImage"
          :src="urlToImage"
          class="card-img-top"
          :alt="title"
        />
        <img
          v-else
          src="../assets/img/Image_not_available.png"
          class="card-img-top"
          :alt="title"
        />
      </div>
      <div class="col-md-7">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">Summary: {{ summary }}</p>
        </div>
      </div>
      <!-- No need the modal, we can just direct them to the news url -->
      <span
        ><a class="btn btn-outline-success float-right m-3" :href="url"
          >Read More</a
        ></span
      >
      <!-- Need to emits a delete function and implement it here -->
      <span
        ><button class="btn btn-outline-warning float-right m-3 mt-0" @click="$emit('deleteArticle')">
          Delete
        </button></span
      >
    </div>
  </div>
</template>

<style></style>
