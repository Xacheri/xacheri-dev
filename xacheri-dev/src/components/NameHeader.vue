<script setup>
    import 'bootstrap/dist/css/bootstrap.css';
</script>

<template>
    <transition name="nameSlideOne" appear>
        <h1 ref="h1" class="headerText fw-semibold">Zachery Smith</h1>
    </transition>
    <transition name="nameSlideTwo" appear>
        <h2 ref="h2" class="headerText">Software Developer</h2>
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

    h1 {
        color: var(--color-heading);
        font-size: 4rem;
    }
    
    h2 {
        color: var(--color-heading);
        font-size: 1.5rem;
    }

    .headerText {
        font-family: system-ui, -apple-system, BlinkMacSystemFont,'Open Sans', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    }

    /* nameSlideOne animation */
        .nameSlideOne-enter-active {
            transition: all 1.5s ease-in-out;
        }
        .nameSlideOne-enter-from {
            transform: translateX(-100%);
        }
        .nameSlideOne-enter-to {
            transform: translateX(0%);
        }

    /* nameSlideTwo animation */
        .nameSlideTwo-enter-active {
            transition: all 1s ease-in-out 0.5s;
        }

        .nameSlideTwo-enter-from {
            transform: translateX(-100%);
        }

        .nameSlideTwo-enter-to {
            transform: translateX(0%);
        }
</style>