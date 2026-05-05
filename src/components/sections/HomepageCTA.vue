<template>
  <section class="cta-section section">
    <div class="container">
      <div class="cta-content">
        <h2>The best leadership conversations<br>start with honesty about<br>where things actually stand.</h2>
        <p>
          Whether you're scaling an organization, navigating a career inflection point,
          or building something new — let's have a real conversation.
        </p>
        <router-link to="/contact" class="btn">Start a Conversation</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  margin-bottom: 1.5rem;
}

.cta-content p {
  font-size: var(--text-body-lg);
  color: var(--color-muted);
  margin-bottom: 2rem;
  text-align: center;
}
</style>