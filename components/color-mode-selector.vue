<template>
    <div class="flex">
        <div v-if="showNextIconLabel" class="flex items-center">
            <span class="transition mx-4 text-gray-600">
                Change to {{ nextMode }}
            </span>
        </div>
        <button @click="toggleMode" @mouseenter="showNextIconLabel = true" @mouseleave="showNextIconLabel = false" class="text-2xl hover:bg-gray-200 dark:hover:bg-gray-400 rounded-md px-1 py-1">
            {{ nextModeIcon }}
        </button>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
colorMode.preference = 'system'

const showNextIconLabel = ref(false)

const modes = [
    'system',
    'light',
    'dark'
]

const modesIcons = {
    system: '🌓',
    light: '🌝',
    dark: '🌚'
}

const nextMode = computed(() => {
    const currentModeIndex = modes.indexOf(colorMode.preference)
    const nextModeIndex = (currentModeIndex + 1) % modes.length
    return modes[nextModeIndex]
})

const nextModeIcon = computed(() => modesIcons[nextMode.value])

const toggleMode = () => colorMode.preference = nextMode.value
</script>