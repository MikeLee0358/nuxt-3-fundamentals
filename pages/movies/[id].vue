<template>
  <pre>{{ data }}</pre>
</template>

<script setup>
const route = useRoute();
definePageMeta({});
const { data } = await useFetch(
  `http://www.omdbapi.com/?apikey=1df33a80&i=${route.params.id}`,
  {
    pick: ["Title", "Error"],
    key: `/movies/${route.params.id}`,
  }
);

if (data.value.Error === "Incorrect IMDb ID.") {
  showError({ statusCode: 404, statusMessage: "page not found" });
}
useHead({
  title: "gigi",
});
</script>
