<template>
  <section class="hero section">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Leadership Advisor - Researcher - Fractional Strategist</p>
          <h1>The science of<br>high performance.<br>The experience of<br>actually building it.</h1>
          <p class="hero-subtext">
            Kayla Vatalaro works with founders, executives, and high-potential professionals at the intersection of neuroscience-informed performance and real operating experience; from early-stage build to multiple IPOs and beyond.
          </p>
          <div class="hero-ctas">
            <router-link to="/work-with-me" class="btn">Work With Me</router-link>
            <router-link to="/about" class="link">About Kayla →</router-link>
          </div>
        </div>
        <div class="hero-visual">
          <img src="/images/headshot.jpg" alt="Kayla Vatalaro, leadership advisor and executive coach" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  padding-top: 120px;
  padding-bottom: 120px;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 48px;
  align-items: center;
}

.hero-copy {
  max-width: 720px;
}

.hero-visual img {
  width: 100%;
  max-width: 420px;
  height: auto;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08);
  display: block;
  margin: 0 auto;
}

.hero h1 {
  font-size: var(--text-h1);
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-subtext {
  font-size: var(--text-body-lg);
  color: var(--color-muted);
  margin-bottom: 2rem;
  max-width: 580px;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  align-items: center;
}

.link {
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: underline;
  transition: color 0.2s ease;
}

.link:hover {
  color: var(--color-accent);
}

@media (max-width: 640px) {
  .hero {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hero-ctas {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>