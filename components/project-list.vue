<template>
  <div>Project</div>

  <section v-if="pending">Loading...</section>
  <section v-else-if="error">Something went wrong!</section>
  <section v-else>
    <ul>
      <li v-for="repo in data" :key="repo.id">
        <div>{{ repo.name }}</div>
      </li>
    </ul>
  </section>
</template>
<script setup>
const { data, error, pending } = await useFetch(
  'https://api.github.com/users/piotr-jura-udemy/repos'
)

console.log(data)
</script>
