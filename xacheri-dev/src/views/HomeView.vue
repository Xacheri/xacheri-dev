<script setup>
  import NameHeader from '../components/NameHeader.vue';
  import TagLine from '../components/TagLine.vue'; 
  import JobHistory from '../components/JobHistory.vue';
  import EducationHistory from '../components/EducationHistory.vue';
  import AwardsHistory from '../components/AwardsHistory.vue';
</script>

<template>
  <div class="ms-md-5 me-md-5 ps-md-5 pe-md-5">
    <NameHeader></NameHeader>
    <div class="d-flex justify-content-center">
      <TagLine></TagLine>
    </div>
    <main class="mt-5">
      <JobHistory></JobHistory>
      <AwardsHistory></AwardsHistory>
      <EducationHistory></EducationHistory>
    </main>
  </div>
</template>
