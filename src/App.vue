<script setup>
import NavBar from './components/Navbar.vue'
</script>

<!-- <template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
  <h1>Hello Vue!</h1>
</template> -->

<template>
  <NavBar />

  <main class="container py-4">
    <RouterView />
  </main>
</template>

<style scoped>
/* nav {
  text-align: center;
  padding: 1rem;
}
nav a {
  text-decoration: none;
  color: #333;
  margin: 0 1rem;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: #42b883;
} */
</style>