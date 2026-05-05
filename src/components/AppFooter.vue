<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-links">
          <router-link to="/about" class="footer-link">About</router-link>
          <router-link to="/work-with-me" class="footer-link">Work With Me</router-link>
          <router-link to="/organizations" class="footer-link">Organizations</router-link>
          <router-link to="/contact" class="footer-link">Contact</router-link>
        </div>
        <div class="footer-info">
          <p>© Vatalaro Coaching LLC | All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  padding: 40px 0;
  background-color: var(--color-bg);
  border-top: 1px solid var(--color-border);
}

.footer-content {
  text-align: center;
}

.footer-links {
  margin-bottom: 2rem;
}

.footer-link {
  font-family: 'DM Sans', sans-serif;
  font-size: var(--text-sm);
  color: var(--color-text);
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--color-accent);
}

.footer-info p {
  font-size: var(--text-sm);
  color: var(--color-muted);
  margin: 0;
}

@media (max-width: 640px) {
  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .footer-link {
    margin: 0;
  }
}
</style>


