<template>
  <div class="tan-color">
    <div class="workshops-training">
      <h2 class="content-title">Workshops & Training for managers and teams</h2>
      <section>
        <h3>Fostering Inclusivity: A DEIB Training Workshop</h3>
        <p>Delve into the nuanced world of diversity, equity, inclusion, and belonging (DEIB). We’ll explore unconscious bias, allyship, and the importance of inclusive hiring practices. If you have Employee Resource Groups, we can collaborate with them to add a dynamic, engaging, and impactful dimension to this training, showcasing from a personal lens why this work matters.</p>
      </section>
      <section>
        <h3>Building Bridges: Strengthening Teams for Success</h3>
        <p>Dive into the core elements of effective teamwork. From fostering trust and deeper connections to enhancing problem-solving skills, this workshop is tailored to elevate your team's collective purpose and create the foundation for impactful collaboration.</p>
      </section>
      <section>
        <h3>Leadership Synergy: Achieving Alignment for Executive Teams</h3>
        <p>Designed specifically for leadership or executive teams, we’ll go beyond mere alignment, and focus on empowering each member to be their best selves and to collectively excel together. Crafted with the heart of authentic connection in mind, this group coaching approach goes beyond traditional leadership training. We'll dive deep into fostering genuine relationships, leveraging humor and vulnerability as tools cultivate an environment where trust, empathy, and shared purpose drive unparalleled synergy.</p>
      </section>
      <section>
        <h3>Putting Conflict to Rest: The Clearing Path from Story to Fact</h3>
        <p>Explore a powerful conscious leadership tool to resolve workplace conflicts, focusing on the distinction between subjective stories and objective facts. This session offers tools for fostering authentic dialogue, enhancing empathy, and achieving lasting resolution.</p>
      </section>
      <p class="disclaimer">It is recommended that these be hosted in person, but many can also be held online.</p>
    </div>
  </div>
</template>

<style scoped>
.content-title {
  text-align: center;
}

.tan-color {
  background-color: rgb(249,249,235);
}

.workshops-training {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
}

.workshops-training section {
  padding: 15px;
  margin-bottom: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  background-color: white;
}

.workshops-training section:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.workshops-training h3 {
  margin-bottom: 1rem;
  color: #141726;
}

.workshops-training p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.disclaimer {
  font-style: italic;
  margin-top: 20px;
  text-align: center;
}
</style>
