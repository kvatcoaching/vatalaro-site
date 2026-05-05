import { createApp } from 'vue';
import App from './App.vue'; 
import router from './router'; 
import './assets/styles.css'; 

const app = createApp(App);

app.use(router);

router.isReady().then(() => {
  app.mount('#app');

  const params = new URLSearchParams(window.location.search);
  const path = params.get('path');
  if (path) {
    router.push(decodeURIComponent(path));
  }
});
