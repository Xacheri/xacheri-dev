<script setup>
</script>

<template>
    <div class="glassCard mt-5">
        <div class="row">
            <h4 class="text-start col">{{job.organization}}</h4>
            <div class="col d-flex flex-column align-items-end" id="titleAndDate">
                <h5 class="text-end"><em>{{job.position}}</em></h5>
                <span class="text-end m-1" id="date">{{job.dates}}</span>
            </div>
        </div>
        <div class="row">
            <div id="skills" class="col">
                <p class="text-decoration-underline mb-1">Skills:</p>
                <ul id="skillsList" class="ps-0 ps-md-4 d-flex flex-column flex-wrap">
                    <li v-for="(skill, index) in job.skills" :key="index">{{ skill }}</li>
                </ul>
            </div>
            <div id="description" class="col-7 col-md-9">
                <ul id="descriptionList">
                    <li class="m-1" v-for="(description, index) in job.descriptions" :key="index">{{ description }}</li>
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
    h4, h5, p, li{
        color: var(--soft-white);
    }

    #skillsList {
        list-style: none;
    }

    #date {
        font-size: 0.75rem;
    }
    .glassCard 
    {
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, .25);
        background-color: rgba(255, 255, 255, 0.247);
        box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(15px);
        padding: 1rem;
    }

    @media screen and (min-width: 768px) {
        #skillsList {
            max-height: 130px;
        }
    }
</style>