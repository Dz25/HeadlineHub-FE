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
                        <form class="py-3" style="background-color: #f8f9fa;" @submit.prevent="handleSubmitComment">
                            <div class="d-flex flex-start w-100 px-3">
                                <img class="rounded-circle shadow-1-strong me-3"
                                    src="https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg"
                                    alt="avatar" width="50" height="50" />
                                <div class="form-outline w-100">
                                    <textarea class="form-control" id="textAreaExample" rows="4" style="background: #fff;"
                                        placeholder="Comment" v-model="comment"></textarea>
                                </div>
                            </div>
                            <div class="mt-2 pt-1 d-flex justify-content-end me-3">
                                <button type="submit" class="btn btn-primary btn-sm">Post comment</button>
                            </div>
                        </form>
                        <div v-for="comment in comments" class="container justify-content-center">
                            <Comment :key="comment.id" :comment="comment" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-right mx-3" @click="saveArticle" :disabled="isSaved">
                        <span v-if="isSaved"><i class="bi bi-bookmark-check"></i> Saved!</span>
                        <span v-else><i class="bi bi-bookmark"></i> Save</span>
                    </button>

                    <a :href=url class="btn btn-primary">More details</a>
                </div>
            </div>
        </div>
        <div id="saved-toast" class="toast align-items-center text-white bg-success" role="alert" aria-live="assertive"
            aria-atomic="true">
            <div class="toast-body">
                Article has been saved!
            </div>
        </div>
    </div>
</template>

<script setup>
import { toRefs, ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { Modal, Toast } from "bootstrap";
import Comment from './Comment.vue';

const props = defineProps({
    data: Object,
    id: String,
    summary: String
})

const { source, title, url, urlToImage } = toRefs(props.data)
const comment = ref("")
const modalEle = ref(null);
let thisModalObj = null;
const comments = ref([]);
const userId = ref("")
const articleId = ref("")

//use watch instead
let isSaved = ref(false);
let savedToast = ref(null);

onMounted(async () => {
    thisModalObj = new Modal(modalEle.value);
    //waiting for login page implementation, this is for a mock userId
    localStorage.setItem("userId", 1)
    userId.value = localStorage.getItem('userId')
    savedToast.value = new Toast(document.getElementById('saved-toast'));
});

watch(props, (cur, prev) => {
    const article = {
        title: title.value,
        urlToImage: props.data.urlToImage,  
        url: props.data.url,
        summary: props?.summary
    }
    //Check if article already exists in the database and get the id
    
    axios.post(`http://localhost:8080/api/articles`, article, { headers: { "Content-Type": "application/json" } }).then((res) => {
        articleId.value = res.data.id
        return axios.get(`http://localhost:8080/api/articles/${res.data.id}/comments`)
    }).then(res => comments.value = res.data)
})
//handle submit comment
//waiting for the the design
const handleSubmitComment = async () => {
    const data = {
        userId: userId.value,
        comment: comment.value
    }

    //POST the comment to the database
    const respone = await axios.post(`http://localhost:8080/api/articles/${articleId.value}/comments`, data, { headers: { "Content-Type": "application/json" } })
    const status = respone.status

    if (status == 201) {
        //reload page
        
        const res = await axios.get(`http://localhost:8080/api/articles/${articleId.value}/comments`)
        comments.value = res.data
        comment.value = ""
    } else {
        alert("Can't post comment! Please try again")
    }

}


const saveArticle = () => {
    axios.post(`http://localhost:8080/api/users/${userId.value}/articles`, {
        title: title.value,
        summary: props.summary,
        url: url.value,
        urlToImage: urlToImage.value
    }, { headers: { "Content-Type": "application/json" } })
        .then(response => {

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