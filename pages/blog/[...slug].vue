<template>
  <article class="prose max-w-none dark:prose-invert">
    <ContentDoc v-slot="{ doc }">
      {{ doc.body.toc.links }}

      <ContentRenderer :value="doc" />
    </ContentDoc>
  </article>
</template>

<script setup>
const route = useRoute()
</script>
