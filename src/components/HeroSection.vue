<template>
  <section class="hero-section">
    <div class="hero-left"></div>
    <div class="hero-right">
      <h1>Empowering leaders and teams to excel and drive <em>transformative</em> impact</h1>
      <p class="motto">Executive Coaching | Professional Development | Consulting</p>
      <div class="button-container">
        <p><router-link to="/contact" class="contact-button"><strong>Learn how with a free discovery call</strong></router-link></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin-top: 50px; 
  margin-bottom: 50px; 
  background-color: #FFFFFF;
}

.hero-left, .hero-right {
  flex: 1;
}

.hero-left {
  min-height: 500px;
  background-image: url('/public/assets/images/IMG_1455.jpg');
  background-size: contain; 
  background-repeat: no-repeat;
  background-position: center; 
}

.hero-right {
  text-align: left; 
  padding: 20px; 
}

.hero-right h1, .hero-right p, .button-container {
  margin: 0 0 20px; 
}

.contact-button {
  display: inline-block;
  padding: 10px 20px; 
  background-color: #141726; 
  color: #FFF; 
  text-decoration: none;
  border-radius: 25px; 
  transition: background-color 0.3s ease; 
  white-space: normal; 
  text-align: center; 
  min-width: 220px; 
  box-sizing: border-box; 
}

.contact-button:hover {
  background-color: #2b3152;
}

@media (max-width: 1024px) {
  .hero-section {
    flex-direction: row; 
  }
}


@media (max-width: 767px) {
  .hero-section {
    flex-direction: column; 
    margin-top: 20px;
    margin-bottom: 20px; 
  }

  .hero-left {
    width: 100%; 
    order: -1; 
    min-height: 400px; 
    background-size: cover; 
    background-position: center;
    margin-top: 20px; 
  }

  .hero-right {
    text-align: center; 
    padding: 20px;
  }

  .hero-right h1, .hero-right p, .button-container {
    margin: 20px 0; 
  }

  .contact-button {
    width: auto; 
    padding: 15px 20px; 
  }
}
</style>

