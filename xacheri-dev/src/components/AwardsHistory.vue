<script setup>
    import AwardEntry from './AwardEntry.vue';
</script>

<template>
    <transition name="awardsFadeIn" appear>
        <div class="mt-5">
            <h3 class="fw-bold text-center mb-2">Awards and Honors</h3>
            <AwardEntry v-for="(awardItem, index) in awardArray" :award="awardItem" :key="index"></AwardEntry>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                awardArray: [
                    {
                        competition: "SkillsUSA - Computer Programming",
                        organization: "SkillsUSA Missouri",
                        award: "State Champion",
                        date: "Apr 2023",
                        description: "Competed individually in a state-level collegiate programming championship, winning 1st place and qualifying to the National competition.",
                        skills: ["C#", "Object-Oriented Programming"],
                        logoPath: "src/assets/skills-svg.svg",
                        logoName: "SkillsUSA Missouri Logo" 
                    },
                    {
                        competition: "SkillsUSA - Computer Programming",
                        organization: "SkillsUSA Missouri",
                        award: "District Champion",
                        date: "Feb 2023",
                        description: "Competed individually in a regional collegiate programming competition, winning 1st place and qualifying to the State competition.",
                        skills: ["C#", "Object-Oriented Programming"],
                        logoPath: "src/assets/skills-svg.svg",
                        logoName: "SkillsUSA Missouri Logo" 
                    }
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

    /* awardsFadeIn animation */
        .awardsFadeIn-enter-active {
            transition: all 1.5s ease-in-out 1.5s;
        }

        .awardsFadeIn-enter-from {
            transform: translateY(100%);
            opacity: 0;
        }
        .awardsFadeIn-enter-to {
            transform: translateY(0%);
            opacity: 1;
        }
</style>