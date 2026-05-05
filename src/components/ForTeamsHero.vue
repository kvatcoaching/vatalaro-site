<template>
  <section class="custom-hero-section">
    <h1 class="page-title">Is your team ready to unleash its full potential?</h1>
    <p>Here are just a few examples of workshops and hands-on training designed to bring out the best in your team. We’ll design a program that fits your goals and budget.</p>
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
  padding: 0 20px;
  height: 50vh; 
  color: white; 
  background: #141726;
}

.custom-hero-section .page-title {
  margin-bottom: 15px; 
  font-size: 2.5rem; 
  color: inherit; 
  font-family: "Lato"; 
}

.custom-hero-section p {
  font-size: 1.4rem; 
  margin-bottom: 20px; 
  max-width: 80%; 
  color: inherit; 
}

@media (max-width: 375px) and (min-width: 281px) {
  .custom-hero-section p {
    font-size: 1.2rem; 
  }

  .custom-hero-section .page-title {
    font-size: 2rem; 
  }
}

@media (max-width: 280px) {
  .custom-hero-section .page-title {
    font-size: 1.8rem; 
  }

  .custom-hero-section p {
    font-size: 1rem; 
    max-width: 90%; 
  }
}
</style>
