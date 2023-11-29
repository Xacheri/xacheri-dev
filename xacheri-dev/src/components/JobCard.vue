<script setup>
</script>

<template>
    <div class="glassCard shadow-lg mt-5">
        <div class="row mb-2">
            <h4 class="text-start col">{{job.organization}}</h4>
            <div class="col d-flex flex-column align-items-end" id="titleAndDate">
                <h5 class="text-end"><em>{{job.position}}</em></h5>
                <span class="text-end m-1 date">{{job.dates}}</span>
            </div>
        </div>
        <div class="row d-flex">
            <div class="">
                <ul>
                    <li v-for="(description, index) in job.descriptions" :key="index" class="m-2">{{ description }}</li>
                </ul>
            </div>
            <h6 class="h6">Skills:</h6>
            <div class="cd-flex flex-column justify-content-start align-items-center m-2">
                <ul class="d-flex flex-wrap skillsList">
                    <li class="me-1 skillsListItem" v-for="(skill, index) in job.skills" :key="index">{{ skill }}{{ index !== job.skills.length - 1 ? "," : "." }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: ['job']
    }
</script>

<style>
    h4, h5, h6, .h6, p, li{
        color: var(--soft-white);
    }

    h4 {
        font-size: 1.75rem;
        font-weight: 600;
    }

    .skillsList {
        min-width: fit-content;
        height: 100%;
    }


    .date {
        font-size: 0.75rem;
    }
    .glassCard 
    {
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, .25);
        background-color: rgba(255, 255, 255, 0.247);
        backdrop-filter: blur(15px);
        padding: 1rem;
    }
</style>