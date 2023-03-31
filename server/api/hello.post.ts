export default defineEventHandler((event) => {
  const body = readBody(event);
  return {
    name: body,
  };
});
