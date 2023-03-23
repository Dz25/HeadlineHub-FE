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
                    <div class="py-3">
                        <h3>Comments</h3>
                        <form class="py-3" style="background-color: #f8f9fa;">
                            <div class="d-flex flex-start w-100 px-3">
                                <img class="rounded-circle shadow-1-strong me-3"
                                    src="https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg" alt="avatar" width="50"
                                    height="50" />
                                <div class="form-outline w-100">
                                    <textarea class="form-control" id="textAreaExample" rows="4"
                                        style="background: #fff;" placeholder="Comment"></textarea>
                                </div>
                            </div>
                            <div class="mt-2 pt-1 d-flex justify-content-end me-3">
                                <button type="button" class="btn btn-primary btn-sm">Post comment</button>
                            </div>  
                        </form>
                        <div v-for="comment in comments" class="container justify-content-center">
                            <Comment :comment="comment" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a :href=url class="btn btn-primary">More details</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { toRefs, ref, onMounted } from 'vue';
import { Modal } from "bootstrap";
import Comment from './Comment.vue';

const props = defineProps({
    data: Object,
    id: String,
    summary: String
})
const { source, title, url, urlToImage } = toRefs(props.data)
const modalEle = ref(null);
let thisModalObj = null;
const comments = ref([
    {
        comment: "asd",
        userId: 2,
        postedTime: "22"
    }, {
        comment: "asd",
        userId: 2,
        postedTime: "22"
    }, {
        comment: "asd",
        userId: 2,
        postedTime: "22"
    }
]);

onMounted(() => {
    thisModalObj = new Modal(modalEle.value);
});
function _show() {
    thisModalObj.show();
}
defineExpose({ show: _show });
</script>