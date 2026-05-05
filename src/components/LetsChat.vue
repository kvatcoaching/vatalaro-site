<template>
  <section class="lets-chat">
    <h3>Let's Chat</h3>
    <p>Have questions or want to learn more? Get in touch with Kayla today!</p>
    <p><router-link to="/contact" class="contact-button">Contact Kayla</router-link></p>
  </section>
</template>

<style scoped>
.lets-chat {
  text-align: center;
  padding: 20px;
  margin: 30px auto;
}

.lets-chat h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.lets-chat p {
  font-size: 18px;
  margin-bottom: 20px;
}

.contact-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem; 
  font-weight: bold; 
  text-decoration: none; 
  color: #FFF; 
  background-color: #141726; 
  border: none;
  border-radius: 25px; 
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #2b3152; 
}

@media (max-width: 430px) {
  .lets-chat {
    padding: 0px 20px;
  }
}
</style>
