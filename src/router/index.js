import { createRouter, createWebHistory } from 'vue-router';
import { vueChatAuth } from '../firebase/config';
import Chatroom from '../views/Chatroom.vue';
import Welcome from '../views/Welcome.vue';

// auth guard
const requireAuth = (to, from, next) => {
  // get user
  let user = vueChatAuth.currentUser
  // check if user is not null
  if(!user) {
    next({name: 'Welcome'})
  } else {
    next()
  }
}

// route guard
const requireNoAuth = (to, from, next) => {
  // get user
  let user = vueChatAuth.currentUser
  // check if user is not null
  if(user) {
    next({name: 'Chatroom'})
  } else {
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chat',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
