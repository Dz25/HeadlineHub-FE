<template>
  <div
    class="modal modal-lg fade"
    tabindex="-1"
    :id="'article' + id"
    aria-hidden="true"
    ref="modalEle"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img :src="urlToImage" class="img-fluid" :alt="title" />
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
          <a :href="url" class="btn btn-primary">More details</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, ref, onMounted } from "vue";
import { Modal } from "bootstrap";

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
onMounted(() => {
  thisModalObj = new Modal(modalEle.value);
});
function _show() {
  thisModalObj.show();
}
defineExpose({ show: _show });
</script>
