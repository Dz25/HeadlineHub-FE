<template>
    <hr class="my-0" />
    <div class="card-body p-3">
        <div class="d-flex flex-start">
            <img class="rounded-circle shadow-1-strong me-3"
                src="https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg" alt="avatar"
                width="50" height="50" />
            <div>
                <h6 class="fw-bold mb-1">Anonymous user</h6>
                <div class="d-flex align-items-center mb-3">
                    <p class="mb-0">
                        <small>
                            {{ postedTime }}
                        </small>
                    </p>
                </div>
                <p class="mb-0">
                    {{ comment }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({ comment: Object })
const { postedTime, comment, userId } = toRefs(props.comment)
</script>