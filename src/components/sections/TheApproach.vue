<template>
  <section class="approach section">
    <div class="container">
      <div class="approach-grid">
        <div class="approach-left">
          <h2>Performance science<br>isn't a framework.<br>It's a lens.</h2>
        </div>
        <div class="approach-right">
          <p>
            Most leadership work starts with a model and fits people into it.
            This is the opposite.
          </p>
          <p>
            Kayla's work is built on a simple premise: human behavior is
            largely predictable, and that predictability is useful. Neuroscience
            and behavioral science have produced decades of rigorous research
            on how people make decisions, what actually drives performance,
            how habits form and break, and what separates leaders who scale
            from those who plateau.
          </p>
          <p>
            The problem is almost none of it makes it into the room where
            decisions actually get made.
          </p>
          <p>
            Kayla's role is to close that gap: translating research findings
            into practical, immediate tools that leaders can apply without
            a PhD or a six-month implementation timeline.
          </p>
          <p>
            She has been studying this material for over fifteen years.
            She has also been building organizations, managing people through
            uncertainty, and navigating complex dynamics for just as long.
            Both matter. Neither alone is sufficient.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.approach-grid {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 48px;
  align-items: start;
}

.approach-left {
  border-top: 4px solid var(--color-accent);
  padding-top: 2rem;
}

.approach-right p {
  margin-bottom: 1.5rem;
}

@media (max-width: 640px) {
  .approach-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .approach-left {
    border-top: none;
    border-left: 4px solid var(--color-accent);
    padding-left: 1rem;
    padding-top: 0;
  }
}
</style>