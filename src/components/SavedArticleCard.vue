<script setup>
import { toRefs, ref } from 'vue';
import ArticleModal from './ArticleModal.vue';
import LoadingModal from './LoadingModal.vue'
import axios from 'axios';

</script>

<template>
    <div class="card m-3">
        <div class="row g-0">
            <div class="col-md-5">
                <img :src=urlToImage class="card-img-top" :alt=title />
            </div>
            <div class="col-md-7">
                <div class="card-body">
                    <h5 class="card-title">Card title: {{ title }}</h5>
                    <p class="card-text">Description: {{ description }}</p>
                </div>
            </div>
            <span><button class="btn btn-outline-success float-right" @click="showModal">Read More</button>
            </span>
            <ArticleModal ref="contentModal" :data=article :id=id :summary=summary />
            <LoadingModal ref="loadingModal" />
        </div>
    </div>
</template>
  
<style></style>