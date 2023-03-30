<template>
    <div class="modal modal-lg fade" tabindex="-1" :id="'article' + id" aria-hidden="true" ref="modalEle">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ title }}</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img :src=urlToImage class="img-fluid" :alt=title>
                    <figure class="p-1 mt-1">
                        <blockquote class="blockquote">
                            <p>{{ summary }}</p>
                        </blockquote>
                        <figcaption class="blockquote-footer text-end">
                            {{ source?.name }}
                        </figcaption>
                    </figure>

                </div>
                <div class="modal-footer">
                    <button class="btn btn-right mx-3" @click="saveArticle" :disabled="isSaved">
                        <span v-if="isSaved"><i class="bi bi-bookmark-check"></i> Saved!</span>
                        <span v-else><i class="bi bi-bookmark"></i> Save</span>
                    </button>
                    <div id="saved-toast" class="toast align-items-center text-white bg-success" role="alert"
                        aria-live="assertive" aria-atomic="true">
                        <div class="toast-body">
                            Article has been saved!
                        </div>
                    </div>

                    <a :href=url class="btn btn-primary">More details</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { toRefs, ref, onMounted, nextTick } from 'vue';
import { Modal } from "bootstrap";
import axios from 'axios';
import SavedArticleCard from './SavedArticleCard.vue';
import Toast from 'bootstrap/js/dist/toast.js';


const props = defineProps({
  data: Object,
  id: String,
  summary: String,
});
const { source, title, description, url, urlToImage, publishedAt } = toRefs(
  props.data
);
let modalEle = ref(null);
let thisModalObj = null;
let isSaved = ref(false);
let savedToast = ref(null);

onMounted(async () => {
    thisModalObj = new Modal(modalEle.value);
    await nextTick();
    savedToast.value = new Toast(document.getElementById('saved-toast'));
});

const saveArticle = () => {
    axios.post(`http://localhost:8081/api/users/${userId}/articles`, {
        title: title.value,
        description: description.value,
        summary: this.summary,
        url: url.value
    })
        .then(response => {
            console.log(response);
            // Process on Success
            const article = {
                title: title.value,
                description: description.value,
                url: url.value,
                urlToImage: urlToImage.value
            };

            savedArticle.value.push(response.data);

            isSaved.value = true;
            savedToast.value.show();

        })
        .catch(error => {
            console.log(error);
        });
};



function _show() {
    thisModalObj.show();
}

// function saveArticle() {
//     const article = {
//         title: title.value,
//         description: description.value,
//         url: url.value,
//         urlToImage: urlToImage.value,
//         publishedAt: publishedAt.value
//     };
//     // emit an event with the article data
//     emit('save-article', article);
//     isSaved.value = true;
// }

defineExpose({ show: _show });
</script>
