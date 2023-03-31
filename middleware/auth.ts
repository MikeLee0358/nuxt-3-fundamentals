export default defineNuxtRouteMiddleware((to, from) => {
  const isUserAuthed = false;
  if (!isUserAuthed) {
    return navigateTo({ name: "movies-id", params: { id: "tt1877830" } });
  }
});
