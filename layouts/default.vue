<template>
  <div class="container mx-auto max-w-4xl">
    <header class="flex justify-between items-center mt-5">
      <div class="flex items-center space-x-11">
        <NuxtLink
          class="text-xl dark:hover:bg-slate-400 dark:hover:text-slate-700 p-2 font-semibold hover:bg-gray-200 transition"
          to="/"
          >Oleh Pidluzhnyi</NuxtLink
        >
        <Menu />
      </div>
      <ClientOnly>
        <colorModeSelector />
      </ClientOnly>
    </header>
    <main class="mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style>
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
