<template>
  <nav style="display: flex; gap: 10px">
    <NuxtLink href="/">Home Page</NuxtLink>
    <NuxtLink href="/movies">Movies Page</NuxtLink>
    <NuxtLink
      href="https://www.google.com/search?client=firefox-b-d&q=translate"
      >Translate Page</NuxtLink
    >
    <NuxtLink v-if="!user.isLogin" to="/login">Login</NuxtLink>
    <NuxtLink v-else a="#" @click.prevent="user.isLogin = false"
      >Log out</NuxtLink
    >
  </nav>
  <slot></slot>
</template>

<script setup>
const user = useUser();
</script>
