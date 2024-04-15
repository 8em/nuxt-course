<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{ 'text-orange-500': activeId === link.id }"
      >
        {{ link.text }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const route = useRoute()
defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0,
  },
  activeId: {
    type: String,
    default: null,
  },
})
</script>
