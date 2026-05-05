<template>
  <section class="contact section">
    <div class="container">
      <div class="contact-content">
        <h1>Let's start with<br>what's actually going on.</h1>
        <p class="intro">
          No intake form optimized for lead scoring. Just a conversation
          about what you're navigating and whether working together makes sense.
        </p>

        <div class="asana-embed-container">
          <div class="responsive-iframe-container">
            <iframe
              class="asana-embed-iframe"
              src="https://form.asana.com/?k=sCaIxNnJY_UyeR42D7YLCw&d=1201846958216343&embed=true"
              frameborder="0"
              title="Contact form"
            ></iframe>
          </div>
          <div class="asana-embed-footer">
            <a
              rel="nofollow noopener"
              target="_blank"
              class="asana-embed-footer-link"
              href="https://asana.com/?utm_source=embedded_form"
            >
              <div class="asana-embed-footer-logo" role="img" aria-label="Logo of Asana"></div>
            </a>
          </div>
        </div>

        <p class="footer-text">
          Kayla reads every message personally and responds within 2–3 business days.
          She works with a small number of clients at a time.
          If this isn't the right moment, that's useful information too.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact {
  padding: var(--section-padding) 0;
  text-align: center;
}

.contact-content {
  max-width: 640px;
  margin: 0 auto;
}

.contact h1 {
  margin-bottom: 1.5rem;
}

.intro {
  font-size: var(--text-body-lg);
  color: var(--color-muted);
  margin-bottom: 3rem;
}

.responsive-iframe-container {
  position: relative;
  width: 100%;
  padding-top: 180%;
}

.asana-embed-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.asana-embed-container {
  max-width: 820px;
  margin: 0 auto 2rem;
}

.footer-text {
  font-size: var(--text-sm);
  color: var(--color-muted);
  margin-top: 2rem;
}

@media (max-width: 640px) {
  .contact-content {
    padding: 0 20px;
  }
}
</style>
