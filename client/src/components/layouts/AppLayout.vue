<script setup lang="ts">

</script>

<template>
    <div class="content">
        <div class="p-16">
            <slot></slot>
        </div>
        <hr class="mt-5">
        <div class="flex justify-center my-2">
            <p class="text-sm font-semibold">Copyright © {{ new Date().getFullYear() }} Reeze. All rights reserved.</p>
        </div>
    </div>
</template>

<style scoped>

</style>