<template>
  <section class="credibility">
    <div class="container">
      <div class="credibility-image">
        <img src="/images/nasdaq-billboard.jpg" alt="Kayla Vatalaro featured on the Nasdaq, Times Square billboard" />
        <p class="image-caption">
          Kayla Vatalaro featured on the NASDAQ billboard, Times Square
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.credibility {
  padding: 40px 0;
}

.credibility-image {
  text-align: center;
}

.credibility-image img {
  width: 50%;
  max-width: 1080px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.image-caption {
  font-family: 'DM Sans', sans-serif;
  font-size: var(--text-sm);
  color: var(--color-muted);
  margin-top: 1rem;
  text-align: center;
}

@media (max-width: 640px) {
  .credibility-image img {
    border-radius: 0;
  }
}
</style>