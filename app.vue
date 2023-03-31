<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} - my movie site` : "my movie site",
});
</script>
