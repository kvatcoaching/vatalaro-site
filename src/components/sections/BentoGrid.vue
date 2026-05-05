<template>
  <section class="bento section">
    <div class="container">
      <p class="eyebrow">THE WORK</p>
      <div class="bento-grid">
        <div class="bento-cell">
          <p class="cell-label">Experience</p>
          <h3>From underperforming systems to high-performing organizations.</h3>
          <p>
            Real operating experience across startups, venture-backed firms, and multi-billion-dollar public companies. Kayla has built, rebuilt, and scaled people systems into high-impact go-to-market and operating engines across product, engineering, and business teams.
          </p>
          <p>
            She has led functions from the ground up across talent and people, go-to-market, and social impact and ESG.
          </p>
          <p>This isn't advisory from the outside. It's from someone who has been in the room, making the decisions and carrying the outcomes.</p>
        </div>
        <div class="bento-cell">
          <p class="cell-label">Performance Science</p>
          <h3>Grounded in science. Built for real life.</h3>
          <p>
            Before the operating work came research. Kayla spent years studying human behavior and cognition as a scientific researcher at Harvard Medical School and Boston Children's Hospital. That foundation continues to shape her work.
          </p>
          <p>
            She stays closely connected to emerging research across neuroscience, behavioral science, and performance; particularly in areas like stress, motivation, decision-making, and sustainable high performance.
          </p>
          <p>
            What makes her work different is translation. She connects what the science actually says with what leaders are navigating right now; turning complex research into practical tools that can be applied immediately, by individuals and teams.
          </p>
        </div>
        <div class="bento-cell">
          <p class="cell-label">Scale</p>
          <h3>Built for the earliest days and everything that follows.</h3>
          <p>
            Experience as an early operator, often among the first building critical functions from the ground up. Partnering with leadership teams at inflection points; first hires, post-raise growth, and moments where structure starts to matter.
          </p>
          <p>
            Kayla has navigated the complexity that comes with rapid scale, from small teams to thousands. She understands which structural decisions actually unlock performance, and which ones add noise without impact.
          </p>
        </div>
        <div class="bento-cell">
          <p class="cell-label">Career Strategy</p>
          <h3>Helping exceptional people move into what's next.</h3>
          <p>
            A significant part of Kayla's work is with high-achieving professionals whose capabilities have outpaced their current recognition. This is strategic, not inspirational.
          </p>
          <p>
            The work focuses on clarity, positioning, and execution; defining the right next chapter, navigating complex environments, and making moves that compound over time.
          </p>
          <p>
            Clients leave with stronger positioning, expanded influence, and a clearer path forward; often stepping into larger roles, significantly increasing compensation, and operating with greater confidence and authority.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.bento-cell {
  padding: 40px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background-color: var(--color-surface);
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

.bento-cell h3 {
  margin-bottom: 1rem;
}

@media (max-width: 640px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-cell {
    padding: 28px;
  }
}
</style>