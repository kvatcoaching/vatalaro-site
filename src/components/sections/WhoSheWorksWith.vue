<template>
  <section class="who-works section">
    <div class="container">
      <div class="who-grid">
        <div class="who-cell">
          <div class="cell-accent"></div>
          <h3>The people building it.</h3>
          <div class="who-cell-body">
            <p>
              CEOs, COOs, and CxOs navigating leadership complexity,
              organizational scale, and the decisions that define
              company trajectories. Particularly effective at inflection
              points: first leadership hires, post-raise scaling, pre-IPO
              organizational design.
            </p>
          </div>
        </div>
        <div class="who-cell">
          <div class="cell-accent"></div>
          <h3>The people ready for what's next.</h3>
          <div class="who-cell-body">
            <p>
              Ambitious mid-to-senior professionals who've hit an invisible
              ceiling — or who simply want to accelerate. Career transitions,
              compensation strategy, leadership identity, and the mechanics
              of building influence in organizations designed for someone else.
            </p>
          </div>
        </div>
        <div class="who-cell">
          <div class="cell-accent"></div>
          <h3>The teams doing the work.</h3>
          <div class="who-cell-body">
            <p>
              Leadership teams, people functions, and founders building their
              first organizational infrastructure. Advisory, fractional
              leadership support, and bespoke workshops built around
              performance science and real operating experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.who-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}

.who-cell {
  position: relative;
  border: 1px solid rgba(20, 20, 20, 0.08);
  background: white;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 14px 32px rgba(20, 20, 20, 0.06);
}

.cell-accent {
  display: none;
}

.cell-label {
  font-family: 'DM Sans', sans-serif;
  font-size: var(--text-label);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.who-cell h3 {
  margin: 0;
  padding: 1.5rem 1.5rem 0 1.5rem;
}

.who-cell-body {
  padding: 1.5rem;
  min-height: 190px;
}

.who-cell-body p {
  font-size: 15px;
  line-height: 1.8;
  margin: 0;
  text-align: left;
}

@media (max-width: 640px) {
  .who-grid {
    grid-template-columns: 1fr;
  }

  .who-cell {
    border-top: none;
    border-left: 4px solid var(--color-accent);
    padding-left: 1rem;
  }
}
</style>