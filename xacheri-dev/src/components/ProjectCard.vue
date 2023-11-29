<template>
    <div>
        <img :src="project.imagePath" :alt="project.imageName" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.link" class="btn btn-primary">View Project</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    data() {
        return {
        }
    },
    props: ['project']
}
</script>

<style scoped>
.card {
    /* Card styles go here */
}
</style>
