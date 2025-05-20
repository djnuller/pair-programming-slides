<template>
  <div class="h-screen w-screen overflow-hidden bg-gray-900 text-pink-300">
    <transition name="slide-fade" mode="out-in">
      <div
        :key="currentIndex"
        class="h-full w-full flex flex-col justify-center items-center px-8 text-center"
      >
        <h1
          class="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-fuchsia-500 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,192,203,0.7)] animate-fade"
          v-html="currentSlide.title"
        ></h1>
        <div class="text-lg leading-relaxed max-w-4xl text-left" v-html="currentSlide.content"></div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { slides } from './slides.js'

const currentIndex = ref(0)
const currentSlide = computed(() => slides[currentIndex.value])

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
})

function handleKey(e) {
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

function next() {
  if (currentIndex.value < slides.length - 1) currentIndex.value++
}
function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}
</script>

<style>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>