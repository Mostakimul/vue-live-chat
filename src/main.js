import { createApp } from 'vue';
import '../src/assets/app.css';
import App from './App.vue';
import { vueChatAuth } from './firebase/config';
import './index.css';
import router from './router';


let app
vueChatAuth.onAuthStateChanged(() => {
  if(!app) {
    app = createApp(App)
  .use(router)
  .mount('#app');
  }
})

