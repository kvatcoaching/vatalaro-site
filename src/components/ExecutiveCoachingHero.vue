<template>
  <section class="custom-hero-section">
    <h1 class="page-title">Are you ready to inspire your teams and those around you to be their greatest selves?</h1>
  </section>
</template>

<script setup>
</script>

<style scoped>
.custom-hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 60px; 
  height: 50vh;
  color: white;
  background: #141726;
}


.custom-hero-section .page-title {
  margin-bottom: 15px; 
  font-size: 2.5rem;
  color: inherit; 
  font-family: "Lato" 
}

@media (max-width: 375px) {
  .custom-hero-section .page-title {
    font-size: 1.8rem; 
  }
}
</style>
