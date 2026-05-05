<template>
  <section class="strategic section" style="background-color: var(--color-surface);">
    <div class="container">
      <p class="eyebrow">FOR HIGH-ACHIEVING TALENT</p>
      <h2>For those whose<br>capabilities have outpaced<br>their current recognition.</h2>
      <div class="strategic-content">
        <div class="strategic-text">
          <p>
            You've done the work. You have the results, the institutional knowledge, the judgment that comes from navigating environments that weren't designed with you in mind. And yet the traditional path to the next level assumes a map you were never handed.
          </p>
          
          <p>
            Kayla's work with high-achieving professionals is strategic, not
            inspirational. It starts with a clear-eyed assessment of where you are,
            what's actually in the way, and what moves will produce the outcomes
            you're after — not in some abstract future, but in the next six months.
          </p>
          <p>This isn't about working harder.<br>It’s about understanding how the system works; and positioning yourself to move within it, or beyond it, intentionally.</p>
          <p>Clients in this work have:</p>
          <ul>
            <li>Stepped into C-suite and VP-level roles in new industries</li>
            <li>Doubled and tripled their earning potential</li>
            <li>Built strong, strategic networks that create real opportunity</li>
            <li>Navigated complex environments with clarity and authority</li>
            <li>Defined and moved toward more meaningful next chapters</li>
          </ul>
          <p>This work is deeply personal. It is part strategy, part accountability, and part partnership; having someone in your corner who understands the landscape and will be both supportive and direct when it matters.</p>
        </div>
        <div class="strategic-grid">
          <div class="strategic-item">
            <h4>Career Transitions</h4>
            <p>Moving into new roles, industries, or levels of leadership with intention and strategy.</p>
          </div>
          <div class="strategic-item">
            <h4>Compensation Strategy</h4>
            <p>Aligning your market value with your actual impact. The negotiation conversation most people avoid.</p>
          </div>
          <div class="strategic-item">
            <h4>Leadership Identity</h4>
            <p>Showing up with clarity and authority in environments that were not designed for you.</p>
          </div>
          <div class="strategic-item">
            <h4>Strategic Positioning & Network</h4>
            <p>Building the relationships and visibility that actually move careers forward.</p>
          </div>
          <div class="strategic-item strategic-item--wide">
            <h4>Defining What’s Next</h4>
            <p>Getting clear on what you actually want next; and making the moves to get there with structure, accountability, and support.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.strategic {
  background-color: var(--color-surface);
}

.strategic-content {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 48px;
  margin-top: 3rem;
}

.strategic-text {
  max-width: 720px;
}

.strategic-text ul {
  list-style: none;
  padding: 0;
}

.strategic-text li {
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
}

.strategic-text li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
}

.strategic-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}

.strategic-item {
  padding: 1.15rem 1.25rem 1.25rem;
  border: 1px solid rgba(28, 28, 26, 0.08);
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 10px 24px rgba(16, 16, 16, 0.04);
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.strategic-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 36px rgba(16, 16, 16, 0.06);
}

.strategic-item h4 {
  font-size: 1.05rem;
  margin: 0 0 0.45rem 0;
  line-height: 1.25;
  color: var(--color-text);
}

.strategic-item p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--color-muted);
  text-align: left;
}

@media (max-width: 640px) {
  .strategic-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .strategic-grid {
    grid-template-columns: 1fr;
  }
}
</style>