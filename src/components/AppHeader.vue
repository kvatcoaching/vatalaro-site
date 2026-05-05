<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="wordmark">
          <router-link to="/">Vatalaro Coaching</router-link>
        </div>
        <nav class="nav-desktop">
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/work-with-me" class="nav-link">Work With Me</router-link>
          <router-link to="/organizations" class="nav-link">Organizations</router-link>
        </nav>
        <div class="cta">
          <a href="https://vatalarocoaching.com/contact" class="btn btn-outline">Get In Touch</a>
        </div>
        <button class="hamburger" @click="toggleMenu" v-if="isMobile">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" v-show="menuOpen" v-if="isMobile">
      <div class="mobile-menu-content">
        <router-link to="/about" class="mobile-link" @click="closeMenu">About</router-link>
        <router-link to="/work-with-me" class="mobile-link" @click="closeMenu">Work With Me</router-link>
        <router-link to="/organizations" class="mobile-link" @click="closeMenu">Organizations</router-link>
        <router-link to="/contact" class="mobile-link" @click="closeMenu">Contact</router-link>
        <router-link to="/work-with-me" class="btn mobile-cta" @click="closeMenu">Work With Me</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const menuOpen = ref(false);
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) {
    menuOpen.value = false;
  }
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.style.overflow = menuOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = '';
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.wordmark a {
  font-family: 'DM Serif Display', serif;
  font-size: 18px;
  font-weight: 400;
  color: var(--color-text);
  text-decoration: none;
}

.nav-desktop {
  display: flex;
  gap: 2rem;
}

.nav-link {
  font-family: 'DM Serif Display', serif;
  font-size: 16px;
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-accent);
}

.cta {
  display: flex;
  align-items: center;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger span {
  width: 24px;
  height: 2px;
  background-color: var(--color-text);
  transition: all 0.3s ease;
}

.mobile-menu {
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-bg);
  z-index: 99;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
}

.mobile-link {
  font-family: 'DM Serif Display', serif;
  font-size: 32px;
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.2s ease;
}

.mobile-link:hover {
  color: var(--color-accent);
}

.mobile-cta {
  margin-top: 2rem;
}

@media (max-width: 767px) {
  .nav-desktop, .cta {
    display: none;
  }
}

@media (min-width: 768px) {
  .hamburger, .mobile-menu {
    display: none;
  }
}
</style>
