<script setup lang="ts">
import AppLayout from './components/layouts/AppLayout.vue'
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  animateGate();

  window.addEventListener('beforeunload', handleBeforeUnload);

  const refreshTimestamp = sessionStorage.getItem('refreshTimestamp');
  if (refreshTimestamp) {
    animateGate();
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload);
});

function handleBeforeUnload() {
  sessionStorage.setItem('refreshTimestamp', Date.now());
}

function animateGate() {
  const gateContainer = document.querySelector('.gate-container');
  if (gateContainer) {
    gateContainer.classList.add('gate-closed');

    setTimeout(() => {
      gateContainer.classList.remove('gate-closed');
    }, 500);
  }
}
</script>

<template>
  <div class="gate-container">
    <div class="gate-left">
      <div class="flex justify-center items-center h-screen">
        <div class="relative">
          <div class="absolute translate-y-2 border-4 bg-[#183153] border-[#183153] rounded-xl w-52 h-full">
          </div>
          <div
            class="relative border-2 bg-white  border-[#183153] p-5 w-52 rounded-xl product-card">
            <div class="flex justify-center">
              <img src="https://www.svgrepo.com/show/201354/chef.svg" width="100" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gate-right">
      <div class="flex justify-center items-center h-screen">
        <div class="relative">
          <div class="absolute translate-y-2 border-4 bg-[#183153] border-[#183153] rounded-xl w-52 h-full">
          </div>
          <div
            class="relative border-2 bg-white  border-[#183153] p-5 w-52 rounded-xl product-card">
            <div class="flex justify-center">
              <img src="https://www.svgrepo.com/show/429379/bowl-food-noodle.svg" width="100" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
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
  height: 100%;
  overflow-x: hidden;
}

.gate-left,
.gate-right {
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: #FFD43B;
  top: 0;
  transition: transform 0.7s ease-in-out;
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