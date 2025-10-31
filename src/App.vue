<template>
  <div id="app">
    <SiteNavbar />
    <main>
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteNavbar from './components/SiteNavbar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
main {
  min-height: calc(100vh - 72px - 120px);
}
</style>
