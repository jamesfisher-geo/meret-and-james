<template>
  <div :class="['nav-container', { homepage: isHomePage }]">
    <div class="name-and-nav" :class="{ homepage: isHomePage }">
      <div class="header-content" :class="{ homepage: isHomePage }">
        <div class="name-text" :class="{ homepage: isHomePage }">Meret & James</div>
        <template v-if="isHomePage">
          <div class="couple-image">
            <img src="../assets/meretandjames_burlington.jpeg" alt="Meret and James" />
          </div>
          <div class="subtitle">Celebrate with us</div>
          <div class="subtitle">Saturday, March 29 2025</div>
        </template>
      </div>

      <div v-if="!isHomePage" class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav :class="['secondary-nav', { 'menu-open': isMenuOpen, homepage: isHomePage }]">
        <RouterLink v-if="!isHomePage" to="/" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/details" @click="closeMenu">Details</RouterLink>
        <RouterLink to="/ourstory" @click="closeMenu">Our Story</RouterLink>
        <RouterLink to="/rsvp" @click="closeMenu">RSVP</RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.nav-container {
  position: relative;
  width: 100%;
}

.name-and-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.header-content.homepage {
  margin-bottom: 40px;
}

.name-text {
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;
  margin-bottom: 10px;
}

.name-text.homepage {
  font-size: 48px;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 24px;
  color: var(--color-text);
  font-family: 'Playfair Display', serif;
  font-weight: 400;
}

.couple-image {
  width: 300px;
  height: 300px;
  margin-bottom: 32px;
  border-radius: 50%;
  overflow: hidden;
}

.couple-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;
}

.menu-toggle span {
  width: 30px;
  height: 3px;
  background: var(--color-text);
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.secondary-nav {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.secondary-nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.secondary-nav a:first-of-type {
  border-left: none;
}

.secondary-nav a.router-link-active {
  color: var(--color-text);
  font-weight: bold;
}

/* Homepage specific styles */
.nav-container.homepage {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.name-and-nav.homepage {
  flex-direction: column;
  align-items: center;
  margin-top: -10vh;
}

.secondary-nav.homepage {
  flex-direction: column;
  align-items: center;
}

.secondary-nav.homepage a {
  display: block;
  padding: 0.5rem 1rem;
  border-left: none;
  text-align: center;
}

@media (max-width: 768px) {
  .nav-container:not(.homepage) .menu-toggle {
    display: flex;
  }

  .nav-container:not(.homepage) .secondary-nav {
    position: absolute;
    flex-direction: column;
    right: 0;
    top: 100%;
    background-color: var(--color-background);
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    z-index: 10;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-container:not(.homepage) .secondary-nav.menu-open {
    max-height: 300px;
  }

  .nav-container:not(.homepage) .secondary-nav a {
    display: block;
    padding: 10px;
    border-left: none;
    border-top: 1px solid var(--color-border);
  }

  .nav-container:not(.homepage) .secondary-nav a:first-of-type {
    border-top: none;
  }

  .nav-container.homepage {
    min-height: 100vh;
    height: auto;
  }

  .name-and-nav.homepage {
    width: 100%;
  }

  .secondary-nav.homepage {
    width: 100%;
  }

  .secondary-nav.homepage a {
    width: 100%;
    padding: 10px 0;
  }

  .name-text.homepage {
    font-size: 36px;
  }

  .subtitle {
    font-size: 20px;
  }

  .couple-image {
    width: 250px;
    height: 250px;
  }
}

@media (min-width: 1024px) {
  .name-text {
    font-size: 24px;
  }

  .secondary-nav {
    font-size: 16px;
  }

  .nav-container.homepage .secondary-nav {
    font-size: 1.5rem;
  }

  .name-text.homepage {
    font-size: 64px;
  }

  .subtitle {
    font-size: 28px;
  }
}
</style>