<script setup>
import AwardEntry from './AwardEntry.vue';
import skillsLogo from '../assets/skills-svg.svg';
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
                    description: "Secured 1st place in a state-level collegiate programming championship, demonstrating advanced proficiency in C# and object-oriented programming principles. This victory qualified me for a spot in the National SkillsUSA competition.",
                    skills: ["C#", "Object-Oriented Programming", "Technical Problem Solving", "Software Documentation", "Algorithm Development"],
                    logoPath: skillsLogo,
                    logoName: "SkillsUSA Missouri Logo"
                },
                {
                    competition: "SkillsUSA - Computer Programming",
                    organization: "SkillsUSA Missouri",
                    award: "District Champion",
                    date: "Feb 2023",
                    description: "Excelled in a regional collegiate programming competition, earning 1st place by utilizing my expertise in C# and object-oriented programming. This lead to my qualification for the State competition.",
                    skills: ["C#", "Object-Oriented Programming", "Analytical Thinking", "Software Development", "Technical Problem Solving"],
                    logoPath: skillsLogo,
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