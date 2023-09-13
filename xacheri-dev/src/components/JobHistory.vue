<script setup>
    import JobCard from './JobCard.vue';
</script>

<template>
        <transition name="jobsFadeIn" appear>
            <div>
                <h3 class="fw-bold text-center mb-2">Professional Experience</h3>
                <JobCard v-for="(job, index) in this.jobs" :job="job" :key="index"></JobCard>
            </div>
        </transition>
</template>

<script>
    export default {
        data() {
            return {
                jobs: [
                    {
                        organization: "Ozarks Technical Community College",
                        position: "Web Development Specialist",
                        dates: "May 2023 - Present",
                        skills: ["HTML/CSS", "WordPress", "JavaScript", "JQuery", "PHP", "Node.js", "MySQL", "MariaDB", "Git/Gitlab"],
                        descriptions:
                        [
                            "Engineered software to migrate the course catalog database towards an in-house solution.",
                            "Designed and implemented an API to display course information.",
                            "Answer web-related software tickets."
                        ]
                    },
                    {
                        organization: "Missouri Scholars Academy",
                        position: "Resident Assistant",
                        dates: "June 2023",
                        skills: ["Mentorship", "Teaching", "Public Speaking", "Teamwork", "Compassion", "Persistence"],
                        descriptions:
                        [
                            "Presented an original 90 minute web history workshop targeting gifted and talented high school students.",
                            "Lead house meetings and personally facilitated residential life for 15 Missouri's highly gifted rising juniors at an intensive 3 week governor's school.",
                            "Taught a specialized Personal and Social Development curriculum for gifted students alongside esteemed faculty members."
                        ]
                    },
                    {
                        organization: "Ozarks Technical Community College",
                        position: "Web Development Assistant",
                        dates: "February 2023 - May 2023",
                        skills: ["HTML/CSS", "WordPress", "JavaScript", "JQuery", "Git/Gitlab"],
                        descriptions:
                        [
                            "Designed and constructed a financial calculator for the college website.",
                            "Regularly updated the college website through the Wordpress CMS",
                            "Worked independently and effectively with minimal supervision."
                        ]
                    }
                ]
            }
        }
    }
</script>

<style>
    /* jobsFadeIn animation */
        .jobsFadeIn-enter-active {
            transition: all 2s ease-in-out 1s;
        }

        .jobsFadeIn-enter-from {
            transform: translateY(100%);
            opacity: 0;
        }
        .jobsFadeIn-enter-to {
            transform: translateY(0%);
            opacity: 1;
        }
</style>