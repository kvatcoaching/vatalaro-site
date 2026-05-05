<template>
  <div class="tan-color">
    <div class="areas-of-collaboration">
      <h2 class="content-title">Some areas we can explore together</h2>
      <div class="collaboration-section">
        <h3>Self-Discovery</h3>
        <p>Embark on a journey of self-discovery to understand your unique strengths, values, and aspirations.</p>
      </div>
      <div class="collaboration-section">
        <h3>Corporate Navigation & Advocating for Yourself</h3>
        <p>Learn the art of navigating corporate landscapes effectively and explore strategies to enhance skills, build strong internal relationships, expand influence, and seize leadership opportunities within your organization to propel your career forward.</p>
      </div>
      <div class="collaboration-section">
        <h3>Career Transitions</h3>
        <p>From resume writing and networking to interview preparation and negotiation skills, embrace change with confidence and clarity as you step into your next chapter of professional growth and personal fulfillment.</p>
      </div>
      <div class="collaboration-section">
        <h3>Time Management & Boundaries</h3>
        <p>Optimize your productivity and personal effectiveness, which can include taking control of your time to establish healthy boundaries with work.</p>
      </div>
      <div class="collaboration-section">
        <h3>Authentic Leadership</h3>
        <p>Embrace authenticity as a leader or rising star, fostering trust and connection with your team and colleagues.</p>
      </div>
      <div class="collaboration-section">
        <h3>Finding Your Voice & Public Speaking</h3>
        <p>Discover the power of your voice and hone your public speaking skills to communicate with clarity and confidence and enhance your leadership presence.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tan-color {
  background-color: rgb(249, 249, 235);
}

.areas-of-collaboration {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
}

.content-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #141726;
  font-size: 24px;
}

.collaboration-section {
  padding: 15px;
  margin-bottom: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: white;
  transition: all 0.3s ease-in-out;
}

.collaboration-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.collaboration-section h3 {
  margin-bottom: 1rem;
  color: #141726;
  font-size: 20px; 
  text-align: center; 
}

.collaboration-section p {
  margin-bottom: 1rem;
  text-align: justify; 
  line-height: 1.6;
}
</style>
