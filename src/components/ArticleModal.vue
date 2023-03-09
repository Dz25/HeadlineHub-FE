<template>
    <div class="modal modal-lg modal-dialog-scrollable fade" tabindex="-1" :id="'article' + id" aria-hidden="true" ref="modalEle">
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
                    <a :href=url class="btn btn-primary">More details</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { toRefs,ref,onMounted } from 'vue';
import { Modal } from "bootstrap";
// onMounted(() => {
//     const formdata = new FormData();
//     formdata.append("key", "7eaa2e91d0e5ab1c39662ff390ebbe4b");
//     formdata.append("url", "https://www.wired.com/story/oneplus-pad-android-tablet/");
//     formdata.append("sentences", "5");

//     const requestOptions = {
//         method: 'POST', 
//         body: formdata,
//         redirect: 'follow'
//     };

//     const response = fetch("https://api.meaningcloud.com/summarization-1.0", requestOptions)
//         .then(response => ({
//             status: response.status,
//             body: response.json()
//         }))
//         .then(({body }) => console.log(body))
//         .catch(error => console.log('error', error));
// })

// const summary = ref()

const props = defineProps({
    data: Object,
    id: String,
    summary: String
})
const { source, title, description, url, urlToImage, publishedAt } = toRefs(props.data)
let modalEle = ref(null);
let thisModalObj = null;
onMounted(() => {
  thisModalObj = new Modal(modalEle.value);
});
function _show() {
  thisModalObj.show();
}
defineExpose({ show: _show });
</script>