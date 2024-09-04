<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="bg-slate-800 text-green-500 min-h-screen min-w-full">
    <header class="h-fit  bg-slate-900">
      <nav class="flex gap-x-4 justify-center">
        <RouterLink to="/" class="hover:underline">Home</RouterLink>
        <RouterLink to="/about" class="hover:underline">About</RouterLink>
      </nav>
    </header>

    <RouterView />
  </main>
</template>
