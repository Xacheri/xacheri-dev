<script setup>
</script>

<template>
    <div class="mt-3">
        <h4 class="fw-bolder">{{ eduItem.school }}</h4>
        <h5 class="fw-lighter">{{ eduItem.degree }}</h5>
        <p class="fw-lighter">({{ eduItem.dates }})</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: ["eduItem"]
    }
</script>

<style>
    h4, h5, p{
        color: var(--soft-white);
        margin: 2px;
    }

    p {
        font-style: italic;
    }
</style>