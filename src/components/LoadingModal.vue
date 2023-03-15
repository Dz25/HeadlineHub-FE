<template>
    <div class="modal modal-lg fade" tabindex="-1" ref="modalEle">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Loading....</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div class="modal-footer">
                    <button disabled class="btn btn-primary">More details</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from "bootstrap";

let modalEle = ref(null);
let thisModalObj = null;
onMounted(() => {
    thisModalObj = new Modal(modalEle.value);
});
function _show() {
    thisModalObj.show();
}
function _hide() {
    thisModalObj.hide();
}
defineExpose({ show: _show, hide: _hide });
</script>