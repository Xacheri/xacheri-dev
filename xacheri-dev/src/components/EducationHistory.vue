<script setup>
    import EducationEntry from './EducationEntry.vue';
</script>

<template>
    <transition name="educationFadeIn" appear>
        <div class="mt-5">
            <h3 class="fw-bold text-center mb-2">Education</h3>
            <EducationEntry v-for="(eduItem, index) in eduArray" :edu-item="eduItem" :key="index"></EducationEntry>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                eduArray: [
                    {
                        school: "Ozarks Technical Community College",
                        degree: "A.A.S in Computer Information Science",
                        dates: "Aug 2022 - May 2024"
                    },
                    {
                        school: "Joplin High School",
                        degree: "High School Diploma",
                        dates: "Aug 2018 - May 2021"
                    },
                ]
            }
        }
    }
</script>

<style>
    h3 {
        color: var(--soft-white);
        font-size: 1.75rem;
    }

    /* educationFadeIn animation */
        .educationFadeIn-enter-active {
            transition: all 2s ease-in-out 1.5s;
        }

        .educationFadeIn-enter-from {
            transform: translateY(100%);
            opacity: 0;
        }
        .educationFadeIn-enter-to {
            transform: translateY(0%);
            opacity: 1;
        }
</style>