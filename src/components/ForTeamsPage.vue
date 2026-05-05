<template>
  <div>
    <section class="hero section">
      <div class="container">
        <p class="eyebrow">For Organizations & Leadership Teams</p>
        <h1>Building organizations<br>that perform at scale.</h1>
        <p class="hero-subtext">
         High-growth companies face a common set of organizational challenges; most are solvable with the right level of focus and rigor, especially when addressed early. Kayla works with founders and leadership teams to build the infrastructure that lets great people do their best work.
        </p>
      </div>
    </section>

    <section class="service section">
      <div class="container">
        <h2>Leadership Team Coaching</h2>
        <p>
          The performance of a leadership team is the single largest
          determinant of organizational output. Not strategy. Not market.
          Not funding. How the people at the top think together, decide together,
          and show up under pressure shapes everything downstream.
        </p>
        <p>
          Kayla works with leadership teams on the dynamics that compound over time,
          and that most teams never examine directly because they're too busy executing.
        </p>

        <h3>What this looks like</h3>
        <p>Engagements are structured around the team's specific challenges. Common focus areas include:</p>
        <ul>
          <li>Annual and quarterly planning effectiveness</li>
          <li>Decision rights, frameworks, and operating rhythm</li>
          <li>Management philosophy and leadership principles development</li>
          <li>Cross-functional communication and alignment</li>
          <li>Leadership team dynamics during rapid growth or transition</li>
          <li>High-potential leadership development programs</li>
        </ul>

        <p>This isn't a two-day offsite and a slide deck. It's ongoing work on the way the team actually operates.</p>
      </div>
    </section>

    <section class="service section" style="background-color: var(--color-surface);">
      <div class="container">
        <h2>CxO Advisory & Fractional Leadership</h2>
        <p>
          Most high-growth companies need senior people strategy expertise
          before they're in a position to hire for it full-time.
          The gap between "we're figuring this out ourselves" and "we have
          a VP of People" is where the most expensive organizational mistakes happen.
        </p>
        <p>
          Kayla works with founders and executive teams as a senior strategic
          partner on people strategy and organizational design, bringing operator-level
          thinking and performance science to the infrastructure decisions that
          determine whether growth is sustainable.
        </p>

        <h3>Not Traditional HR</h3>
        <p>
          This is not standard HR support or overly prescribed “best practice” consulting. Kayla works on the real levers that shape how organizations perform; how teams are structured, how leaders operate, and how decisions actually get made in fast-moving environments.
        </p>
        <p>The work is smart, pragmatic, and built for what actually works — not what is done because it’s “how it’s supposed to be done.
        </p>
        <p>She can also partner closely with internal People teams or step in where that function is still being built.</p>

        <h3>Focus areas</h3>
        <ul>
          <li>Headcount planning and organizational design</li>
          <li>Hiring strategy and talent system architecture</li>
          <li>Job leveling frameworks and compensation philosophy</li>
          <li>High-potential identification and leadership development</li>
          <li>Performance systems that actually measure what matters</li>
          <li>Culture alignment and employee experience design during hypergrowth</li>
          <li>Social impact strategy and cross-sector partnerships</li>
        </ul>
      </div>
    </section>

    <section class="service section">
      <div class="container">
        <h2>Bespoke Workshops</h2>
        <p>Workshops that actually change something.</p>
        <p>
          Most corporate learning experiences are forgotten within two weeks.
          Kayla's workshops are built on what the behavioral science says
          about how adults learn and change — and what it actually takes to
          shift the way a team operates, not just expose them to a new idea.
        </p>
        <p>
          Each workshop is custom-built for the organization's specific moment.
          The content, format, and depth are designed together — not selected
          from a menu.
        </p>
        <div class="workshop-image">
          <img src="/images/kayla-speaking.png" alt="Kayla Vatalaro leading a workshop" />
        </div>

        <h3>Topic areas</h3>
        <p>
          Each workshop is custom-built for the organization's specific moment.
          The content, format, and depth are designed together — not selected
          from a menu.
        </p>

        <h3>Topic areas</h3>
        <ul>
          <li>Performance science and motivation research for leadership teams</li>
          <li>Strengths-based leadership and team design</li>
          <li>Manager effectiveness and the science of feedback</li>
          <li>Career development programs for high-potential talent</li>
          <li>Building and sustaining high-performing teams</li>
          <li>Navigating organizational complexity with clarity</li>
        </ul>

        <p>Half-day, full-day, or multi-session series. In-person or remote. Built around a specific outcome, not a topic.</p>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <div class="cta-content">
          <h2>Tell us what your organization is navigating.</h2>
          <p>
            Every engagement starts with a conversation about the actual challenge —
            not a capabilities pitch. If you're dealing with something real,
            let's talk about whether and how Kayla can help.
          </p>
          <router-link to="/contact" class="btn">Start a Conversation</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero {
  padding-top: 120px;
  padding-bottom: 120px;
}

.hero h1 {
  margin-bottom: 1.5rem;
}

.hero-subtext {
  font-size: var(--text-body-lg);
  color: var(--color-muted);
  margin-bottom: 0;
  max-width: 600px;
}

.service {
  padding: var(--section-padding) 0;
}

.service h2 {
  margin-bottom: 1.5rem;
}

.service h3 {
  margin: 2rem 0 1rem 0;
  font-size: var(--text-h3);
}

.service p {
  margin-bottom: 1.5rem;
}

.service ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 1.5rem 0;
}

.service li {
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
}

.service li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
}

.workshop-image img {
  display: block;
  width: 60%;
  max-width: 760px;
  height: auto;
  margin: 1.5rem auto 2rem;
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08);
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: var(--text-body-lg);
  color: var(--color-muted);
  margin-bottom: 2rem;
  text-align: center;
}

@media (max-width: 640px) {
  .hero {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
</style>