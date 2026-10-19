<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  // Judul/subjudul cadangan jika slide tidak punya sendiri
  judul: { type: String, default: '' },
  subjudul: { type: String, default: '' },
  // [{ gambar, judul?, subjudul? }, ...]
  slides: { type: Array, default: () => [] },
  tinggi: { type: String, default: '500px' },
  interval: { type: Number, default: 3500 } // 1 detik
})

const aktif = ref(0)
let timer = null

function ke(i) {
  const total = props.slides.length || 1
  aktif.value = (i + total) % total
}

function mulai() {
  berhenti()
  if (props.slides.length > 1) {
    timer = setInterval(() => ke(aktif.value + 1), props.interval)
  }
}

function berhenti() {
  clearInterval(timer)
  timer = null
}

// Klik panah/titik: pindah lalu reset hitungan 5 detik
function manual(i) {
  ke(i)
  mulai()
}

// Swipe di layar sentuh
let awalX = 0
function sentuhMulai(e) {
  awalX = e.changedTouches[0].clientX
}
function sentuhSelesai(e) {
  const selisih = e.changedTouches[0].clientX - awalX
  if (Math.abs(selisih) > 50) manual(aktif.value + (selisih < 0 ? 1 : -1))
}

onMounted(mulai)
onBeforeUnmount(berhenti)
</script>

<template>
  <section
    class="hero-slider"
    :style="{ minHeight: tinggi }"
    @mouseenter="berhenti"
    @mouseleave="mulai"
    @touchstart.passive="sentuhMulai"
    @touchend.passive="sentuhSelesai"
  >
    <!-- Slide -->
    <div
      v-for="(s, i) in slides"
      :key="i"
      class="hero-slide text-white text-center"
      :class="{ active: i === aktif }"
      :style="{ backgroundImage: s.gambar ? `url(${s.gambar})` : 'none' }"
      :aria-hidden="i !== aktif"
    >
      <div class="hero-overlay"></div>

      <div class="container position-relative py-5">
        <h1 class="display-4 fw-bold">{{ s.judul || judul }}</h1>
        <p v-if="s.subjudul || subjudul" class="lead mb-4">{{ s.subjudul || subjudul }}</p>
        <slot></slot>
      </div>
    </div>

    <!-- Cadangan jika slides kosong -->
    <div v-if="!slides.length" class="hero-slide active text-white text-center">
      <div class="container position-relative py-5">
        <h1 class="display-4 fw-bold">{{ judul }}</h1>
        <p v-if="subjudul" class="lead mb-4">{{ subjudul }}</p>
        <slot></slot>
      </div>
    </div>

    <!-- Panah -->
    <template v-if="slides.length > 1">
      <button class="hero-nav prev" type="button" aria-label="Sebelumnya" @click="manual(aktif - 1)">
        <i class="bi bi-chevron-left"></i>
      </button>
      <button class="hero-nav next" type="button" aria-label="Berikutnya" @click="manual(aktif + 1)">
        <i class="bi bi-chevron-right"></i>
      </button>

      <!-- Titik -->
      <div class="hero-dots">
        <button
          v-for="(s, i) in slides"
          :key="i"
          type="button"
          class="hero-dot"
          :class="{ active: i === aktif }"
          :aria-label="`Slide ${i + 1}`"
          @click="manual(i)"
        ></button>
      </div>
    </template>
  </section>
</template>

<style scoped>
.hero-slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #4a8c6f;
}

.hero-slide {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-color: #4a8c6f;
  opacity: 0;
  visibility: hidden; /* slide tidak aktif tidak bisa difokus/diklik */
  transition: opacity 0.9s ease, visibility 0.9s;
}

.hero-slide.active {
  opacity: 1;
  visibility: visible;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(31, 37, 71, 0.55);
}

/* Panah */
.hero-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  width: 46px;
  height: 46px;
  display: none;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  color: #4a8c6f;
  transition: background 0.2s, color 0.2s;
}

.hero-nav:hover {
  background: #4a8c6f;
  color: #fff;
}

.hero-nav.prev { left: 20px; }
.hero-nav.next { right: 20px; }

@media (min-width: 768px) {
  .hero-nav { display: flex; }
}

/* Titik */
.hero-dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 18px;
  z-index: 3;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.hero-dot {
  width: 12px;
  height: 12px;
  padding: 0;
  border: 2px solid #fff;
  border-radius: 50%;
  background: transparent;
  transition: background 0.2s, transform 0.2s;
}

.hero-dot.active {
  background: #fff;
  transform: scale(1.2);
}

@media (prefers-reduced-motion: reduce) {
  .hero-slide { transition: none; }
}
</style>