<template>
    <div>
        We Are inside blog!

        Route of page is {{ route.params.id }}
    </div>
</template>

<script setup>
    const route = useRoute()

    console.log(route)
</script>