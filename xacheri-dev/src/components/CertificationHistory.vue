<script setup>
    import CertificationEntry from './CertificationEntry.vue';
</script>

<template>
    <h3 class="fw-bold text-center mt-5 mb-2">Certifications</h3>
    <div>
        <CertificationEntry></CertificationEntry>
    </div>
</template>

<script>
export default {
    data() {
        return {
            certifications: [{},{}]
        }
    }
}
</script>