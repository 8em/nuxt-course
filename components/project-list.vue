<template>
  <div>Project</div>

  <section v-if="pending">Loading...</section>
  <section v-else-if="error">Something went wrong!</section>
  <section v-else>
    <ul class="grid grid-cols-1 gap-4">
      <li v-for="repo in repos" :key="repo.id" class="border border-gray-200 rounded-sm p-4 hover:bg-gray-400 font-mono">
        <a :href="repo.html_url" target="_blank">
            <div>{{ repo.name }}</div>
        </a>
      </li>
    </ul>
  </section>
</template>
<script setup>
const { data, error, pending } = await useFetch(
  'https://api.github.com/users/piotr-jura-udemy/repos'
)

const repos = computed(
    () => data.value.filter(repo => repo.description)
)
</script>
