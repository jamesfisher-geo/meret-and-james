<template>
  <div id="app">
    <NavBar :homepage="$route.path === '/'" />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<style>
/* Import both fonts with different weights for more styling options */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;600;700&display=swap');

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  /* Create a font stack with fallbacks */
  font-family: 'Cormorant Garamond', 'Playfair Display', 'Inconsolata', serif;
  display: flex;
  flex-direction: column;
}

/* You might want to use Inconsolata for specific elements */
.monospace-text {
  font-family: 'Inconsolata', monospace;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>