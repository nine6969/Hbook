<script setup>
</script>

<template>
    <router-view v-slot="{ Component }">
        <transition name="router_animate">
            <component :is="Component" :key="$route.path"  v-if="$route.meta.animate"/>
        </transition>
        <component :is="Component" :key="$route.path"  v-if="!$route.meta.animate"/>
    </router-view>
</template>

<style scoped>
.router_animate-enter-active {
    animation: slideInUp 0.4s;
}
.router_animate-leave-active {
    animation: slideOutDown 0.3s;
}

</style>
