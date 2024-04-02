<template>
    <div class="container mx-auto max-w-2xl" >
        <header class="flex justify-between items-center mt-5">
            <div>
                <NuxtLink class="text-xl p-2 font-semibold hover:bg-gray-200 transition" to="/">Oleh Pidluzhnyi</NuxtLink>
            </div>
            
            <Menu />
        </header>
        <main class="mt-10">
            <slot />

        </main>
    </div>
</template>