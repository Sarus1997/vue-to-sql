<template>
  <div class="navbar">
    <div class="logo">Logo</div>
    <button class="hamburger" @click="toggleSidebar">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul :class="{ 'open': isSidebarOpen }">
      <li><a href="#/" class="nav-link">Home</a></li>
      <li><a href="#/about" class="nav-link">About</a></li>
      <li><a href="#/story" class="nav-link">Story</a></li>
    </ul>
    <div v-if="isSidebarOpen" class="overlay" @click="toggleSidebar"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 50px;
  background-color: #333;
  position: relative;
}

.logo {
  color: #fff;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
  position: relative;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #193fb1;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 2px;
  background-color: #193fb1;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Sidebar styles for small screens */
.hamburger {
  display: none;
  background: none;
  border: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: #fff;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  ul {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background-color: #333;
    flex-direction: column;
    gap: 15px;
    padding-top: 20px;
    transform: translateX(100%);
    z-index: 10;
  }

  ul.open {
    transform: translateX(0);
  }
}
</style>
