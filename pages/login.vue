<template>
  <form @submit.prevent="user.login">
    <label>
      Username
      <input type="text" />
    </label>

    <label>
      Password
      <input type="password" />
    </label>
    <button>login</button>
  </form>
</template>

<script setup>
const user = useUser();
definePageMeta({
  layout: "plain",
});
</script>
