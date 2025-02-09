import { createRouter, createWebHistory } from 'vue-router'

import Details from '../views/Details.vue';
import OurStory from '../views/OurStory.vue';
import Rsvp from '../views/Rsvp.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/ourstory',
      name: 'ourstory',
      component: OurStory
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: Rsvp
    }
  ]
})

export default router
