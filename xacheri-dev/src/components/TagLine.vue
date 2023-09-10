<script setup>
    import 'bootstrap/dist/css/bootstrap.css';
</script>

<template>
    <transition name="tagLineSlide" appear>
        <span class="text-center mt-5 pt-5">Engineering real solutions to complex problems.</span>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>

<style>
    span {
        font-size: 1.25rem;
        color: var(--color-heading);
    }

    /* tagLineSlide animation */
        .tagLineSlide-enter-active {
            transition: all 1.5s ease-in-out 1s;
        }

        .tagLineSlide-enter-from {
            transform: translateY(100%);
            opacity: 0;
        }
        .tagLineSlide-enter-to {
            transform: translateY(0%);
            opacity: 1;
        }

</style>