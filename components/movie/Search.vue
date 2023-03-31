<script setup>
const query = ref("batman");
const movies = ref([]);
async function search() {
  const { Search } = await $fetch(
    `https://www.omdbapi.com/?apikey=1df33a80&s=${query.value}`
  );
  movies.value = Search;
}
search();
</script>

<template>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <button>Search</button>
  </form>

  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
        <img :src="movie.Poster" alt="" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
