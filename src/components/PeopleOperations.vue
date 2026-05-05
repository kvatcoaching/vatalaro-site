<template>
  <div class="tan-color">
    <div class="people-operations-container">
      <div class="first-principles-leadership">
        <h2 class="content-title">First Principles Leadership for Startups</h2>
        <p>Startup leaders, this coaching approach is tailored to teach you the fundamentals of growing a business from 1 to 100 and beyond. Just as you iterate and scale your products, coaches guide you in refining foundational leadership skills. From mastering communication to strategic thinking, this tailored guidance empowers you to navigate every growth stage with clarity and confidence. Invest in your leadership journey today to pave the way for enduring success.</p>
        <div class="smaller">
          <p>Looking for 1:1 coaching? Learn more <router-link to="/executive-coaching">here</router-link>.</p>
        </div>
        <hr class="bar">
      </div>
      <div class="top-section">
        <div class="gradient-shape"></div>
        <div class="people-operations-content">
          <h2 class="content-title" id="title2">On Demand & Full Service People Operations for Startups</h2>
          <p>Navigating the complexities of People Operations (or HR) can be daunting for startups, but there are common pitfalls that can easily be avoided, and are sometimes critical to a company's survival. I’ve teamed up with heavy hitting People Leaders who laid the groundwork at Airbnb, Facebook, LinkedIn, and Asana.</p>
          <p>We provide critical people operations services that won’t break the bank. <strong>It's like having a team of in-house experts when you need them.</strong> We’ll start by conducting an honest assessment of your current state, and provide a few different solutions (we’ll never oversell you).</p>
        </div>
      </div>
      <div class="areas-of-help">
        <h2 class="table-header content-title">Areas We Help Startups</h2>
        <div class="areas-grid">
          <div class="area" v-for="(item, index) in areas" :key="index">
            <h3>{{ item.Header }}</h3>
            <p>{{ item.Description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const areas = ref([
  { Header: "Employer Branding", Description: "A compelling employer brand that resonates with your mission and makes you a talent magnet." },
  { Header: "Onboarding", Description: "Ensure new hires know what they need to when they start, nurturing & integrating them into the team." },
  { Header: "Recruiting & Executive Search", Description: "From sourcing to satisfaction, we find recruiting partners for the best hire." },
  { Header: "Admin-lite Performance Evaluation", Description: "High-performance teams need to know how their performance is being measured." },
  { Header: "Compensation Design & Benchmarking", Description: "Including models for performance grants, equity vesting, cash vs. equity ratios." },
  { Header: "Offboarding & Employee Exits", Description: "" },
  { Header: "Organizational Structure & Role Design", Description: "" },
  { Header: "Inclusion & Diversity Planning", Description: "" },
  { Header: "Incentive Programs", Description: "" },
  { Header: "Executive Compensation", Description: "" },
  { Header: "Tooling & Systems", Description: "" },
  { Header: "Employee Handbook & Workplace Policies", Description: "" },
  { Header: "Employment Law & Risk Mitigation", Description: "" },
  { Header: "When to bring someone on full-time", Description: "" },
  { Header: "And more", Description: "" }
]);
</script>

<style scoped>
.smaller p {
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
}

.tan-color {
  background-color: rgb(249,249,235);
}

.content-title {
  text-align: center;
}

.people-operations-container {
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 0 auto;
  max-width: 75%;
  padding: 50px;
}

.first-principles-leadership, .top-section, .areas-of-help {
  margin-bottom: 20px;
}

.areas-of-help .areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.areas-of-help .area {
  background-color: #f9f9f9;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.areas-of-help .area:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.people-operations-container p {
  display: block;
  text-align: justify;
  margin: 0 auto;
  line-height: 1.6; 
}

.area h3 {
  text-align: center;
}

@media (min-width: 1025px) {
  .areas-of-help .areas-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width: 1024px) {
  .people-operations-container {
    max-width: 90%;
    padding: 30px;
  }
  .areas-of-help .areas-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .people-operations-container {
    max-width: 100%;
    padding: 20px;
  }
  .areas-of-help .areas-grid {
    grid-template-columns: 1fr;
  }
}
</style>
