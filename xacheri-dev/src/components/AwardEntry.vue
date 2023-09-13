<script setup>
    import formatUtils from "../shared/formats.js";
</script>

<template>
        <div class="mt-5 row">
            <div class="col d-flex">
                <img class="img-fluid m-1 p-1 p-sm-2 p-md-3 p-lg-4" id="logoImage" :src="award.logoPath" :alt="award.logoName">
            </div>
            <div class="col d-flex flex-column justify-content-center">
                <h4>{{ award.award }}</h4>
                <h5>{{ award.competition }}</h5>
                <p id="dateEarned"> {{ award.date }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col ms-2 me-2">
                <p class="m-1" id="awardDescription"> {{ award.description }}</p>
                <ul class="d-flex">
                    <li class="m-1" role="heading">Skills:</li>
                    <li class="m-1" v-for="(skill, index) in award.skills" :key="index">{{ skill }}{{ formatUtils.inlineListPunctuation(index, award.skills) }}</li>
                </ul>
                <p class="text-end" id="organizationName">Issued By: {{ award.organization }}</p>
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: ['award']
    }
</script>

<style>
    h4, h5, p, li{
        color: var(--soft-white);
    }

    ul {
        list-style: none;
        padding-left: 0px;
    }

    #logoImage {
        width: 100% /9;
    }
</style>