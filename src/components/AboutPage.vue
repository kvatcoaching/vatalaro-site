<template>
  <div>
    <section class="hero section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-image">
            <div class="hero-image-frame">
              <img src="/images/KaylaonPanel.jpg" alt="Kayla Vatalaro speaking on a panel" />
            </div>
          </div>
          <div class="hero-text">
            <h1>Coach. Operator.<br>Perpetual student of<br>what drives performance.</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="story section">
      <div class="container">
        <div class="story-content">
          <p>
            Kayla Vatalaro has spent her career at an unusual intersection.
            Early on, she studied human behavior and cognition as a neuroscience researcher at Harvard Medical School and Boston Children’s Hospital. Later, she became an operator; working inside startups, venture-backed companies, nonprofits, and large public organizations, building teams, designing go-to-market functions, and navigating the complexity that comes with growth. 
          </p>
          <p>She has a track record of strengthening and scaling people systems into high-performing organizations. Her experience has been built in real environments; where not everything works the first time, and where learning quickly is part of building anything that lasts. She also continues to study neuroscience, behavioral science, and coaching methodology as a practitioner; integrating what is most useful into her work with clients.</p>
          <p>She has worked in true 0-to-1 environments, turning new ideas into revenue; including establishing and scaling a $50M+ ARR business line within a global enterprise, and leading one of its highest-performing sales teams. Her experience spans technology, biotech, healthcare, media, finance, and social impact.</p>
        </div>
      </div>
    </section>

    <section class="personal section">
      <div class="container">
        <h2>The personal story</h2>
        <p>
          Kayla is a Korean adoptee and first-generation college graduate.
          She didn't start with an inherited network, a set of institutional
          contacts, or the kind of informal mentorship that accelerates careers
          invisibly. She figured it out, and spent years navigating institutions
          designed for people who looked and sounded nothing like her.
        </p>
        <p>
          That experience isn't separate from her work. It's the foundation of it.
        </p>
        <p>
          The strategic acuity required to navigate rooms where you're the
          outlier — to understand the unwritten rules, to build influence
          without defaulting to assimilation, to maintain identity while
          operating with authority — those are learnable skills. Kayla
          learned them the hard way. She teaches them deliberately.
        </p>

        <div class="callout">
          <blockquote>
            "Giving women the opportunity for choice allows them to become their full
            and extraordinary selves, be in the driver's seat of their own lives,
            and the power to shape the communities they're part of —
            which creates a better future for all."
          </blockquote>
          <cite>— Kayla Vatalaro, Pledge 1% Women Who Lead campaign</cite>
        </div>

        <img src="/images/Kayla_jumping_Peru.jpg" alt="Peru jumping" class="speaking-image" />
       
      </div>
    </section>

    <section class="approach section">
      <div class="container">
        <h2>The approach</h2>
        <p>
          The through-line across Kayla’s work is integration.
        </p>
        <p>
          Performance is not just strategy, and it is not just psychology. It is how people think, behave, interact, and operate within systems.
        </p>
        <p>
          Her work brings together operating experience, performance science, and real-world application; helping clients build organizations that perform and careers that reflect what they are capable of.
        </p>
        <p>She works with founders and executives navigating growth and complexity, and with high-achieving professionals defining what comes next. The context changes. The rigor does not.
        </p>
      </div>
    </section>

    <section class="credentials section">
      <div class="container">
        <p class="eyebrow">Background & Recognition</p>
        <div class="credentials-list">
          <p>Research published in peer-reviewed journals</p>
          <hr>
          <p>Participated in three successful IPOs</p>
          <hr>
          <p>Experience across early-stage startups, venture-backed firms, and multi-billion-dollar public companies</p>
          <hr>
          <p>Stood up a $50M business line in three years with a lean team</p>
          <hr>
          <p>A Pledge 1% 2022 Woman of the Year </p>
          <hr>
          <p>Featured in Forbes, Marie Claire, Digiday, The Muse, & More</p>
          <hr>
          <p>Experience integrating social impact initiatives into core business strategy</p>
          <hr>
          <p>Founder of the nonprofit, <a href="https://futureleadersmovement.org" target="_blank" rel="noopener noreferrer">FutureLeadersMovement.org</a>, dedicated to supporting overlooked talent</p>
          <hr>
          <p>Board member, nonprofit organization</p>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <div class="cta-content">
          <h2>Work with Kayla.</h2>
          <p class="cta-copy">
            Advisory engagements, 1:1 coaching, organizational advisory,
            and fractional leadership support.
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
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.95fr);
  gap: 58px;
  align-items: start;
}

.hero-image {
  overflow: hidden;
  border-radius: 24px;
  max-width: 520px;
  margin: 0 auto;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08);
}

.hero-image-frame {
  width: 100%;
  height: auto;
}

.hero-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  display: block;
  border-radius: 24px;
}

.story-content {
  max-width: 720px;
  margin: 0 auto;
}

.story-content p {
  margin-bottom: 1.5rem;
}

.personal h2 {
  margin-bottom: 2rem;
}

.personal {
  max-width: 720px;
  margin: 0 auto;
}

.personal p {
  margin-bottom: 1.5rem;
}

.speaking-image {
  display: block;
  width: 75%;
  max-width: 900px;
  height: auto;
  border-radius: 8px;
  margin: 2rem auto;
}

.image-caption {
  font-size: var(--text-sm);
  color: var(--color-muted);
  text-align: center;
}

.approach h2 {
  margin-bottom: 2rem;
}

.approach p {
  margin-bottom: 1.5rem;
}

.credentials .eyebrow {
  font-family: 'DM Serif Display', serif;
  font-size: var(--text-h3);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  text-transform: none;
  letter-spacing: normal;
}

.credentials-list p {
  font-size: 16px;
  color: var(--color-muted);
  margin: 1rem 0;
}

.credentials-list hr {
  border: none;
  height: 1px;
  background-color: var(--color-border);
  margin: 1rem 0;
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
}

.cta-copy {
  text-align: center;
}

@media (max-width: 640px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hero-text {
    order: 2;
  }

  .hero-image {
    order: 1;
  }

  .hero-image img {
    max-width: 100%;
  }

  .speaking-image {
    max-width: 100%;
  }
}
</style>
