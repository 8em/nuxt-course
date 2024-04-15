<template>
  <NuxtLayout>
    <section>
      <h1>Oops.. {{ error.statusCode }}</h1>
      <h2>Error: {{ error.statusMessage }}</h2>
    </section>
  </NuxtLayout>
</template>

<script setup>
defineProps({ error: Object })
</script>
