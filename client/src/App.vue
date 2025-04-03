<script setup lang="ts">
import AppLayout from './components/layouts/AppLayout.vue'
import { onMounted, onBeforeUnmount } from 'vue'

// Animation logic
onMounted(() => {
  animateGate();
  
  // Set up refresh detection
  window.addEventListener('beforeunload', handleBeforeUnload);
  
  // Check if this is a refresh
  const refreshTimestamp = sessionStorage.getItem('refreshTimestamp');
  if (refreshTimestamp) {
    // This is a refresh, animate the gate
    animateGate();
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload);
});

function handleBeforeUnload() {
  // Save a timestamp in sessionStorage
  sessionStorage.setItem('refreshTimestamp', Date.now());
}

function animateGate() {
  const gateContainer = document.querySelector('.gate-container');
  if (gateContainer) {
    // Initial state: gates closed
    gateContainer.classList.add('gate-closed');
    
    // After a short delay, open the gates
    setTimeout(() => {
      gateContainer.classList.remove('gate-closed');
    }, 500);
  }
}
</script>

<template>
  <div class="gate-container">
    <div class="gate-left">
    </div>
    <div class="gate-right">
    </div>
    
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>

<style>
.gate-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
}

.gate-left, .gate-right {
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: #FFD43B;
  top: 0;
  transition: transform 1s ease-in-out;
  z-index: 10;
}

.gate-left {
  left: 0;
  transform: translateX(-100%);
}

.gate-right {
  right: 0;
  transform: translateX(100%);
}

.gate-closed .gate-left {
  transform: translateX(0);
}

.gate-closed .gate-right {
  transform: translateX(0);
}

.gate-container AppLayout {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>