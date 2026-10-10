<script setup>
import { ref } from 'vue'

const nomorWA = '62812xxxxxxx'
const linkPartner = `https://wa.me/${nomorWA}?text=${encodeURIComponent(
  'Halo INSAcare, kami tertarik untuk menjalin kerja sama (partnership).'
)}`

// Isi `logo` dengan gambar asli jika sudah ada, contoh:
// logo: new URL('../assets/partners/sekolah-a.png', import.meta.url).href
// Jika `logo` kosong, kartu menampilkan ikon + label kategori sebagai pengganti.
const partner = [
  { nama: 'Companies', ikon: 'bi-building', logo: '' },
  { nama: 'Schools', ikon: 'bi-mortarboard', logo: '' },
  { nama: 'Communities', ikon: 'bi-people', logo: '' },
  { nama: 'Event Organizers', ikon: 'bi-calendar-event', logo: '' },
  { nama: 'Your Organization', ikon: 'bi-plus-circle', logo: '' }
]

const track = ref(null)

function geser(arah) {
  const el = track.value
  if (!el) return
  el.scrollBy({ left: arah * (el.clientWidth * 0.8), behavior: 'smooth' })
}

// Drag dengan mouse (di layar sentuh, geser sudah bawaan browser)
let sedangDrag = false
let mulaiX = 0
let mulaiScroll = 0

function mulaiDrag(e) {
  if (e.pointerType !== 'mouse') return
  sedangDrag = true
  mulaiX = e.clientX
  mulaiScroll = track.value.scrollLeft
  track.value.classList.add('dragging')
}

function saatDrag(e) {
  if (!sedangDrag) return
  track.value.scrollLeft = mulaiScroll - (e.clientX - mulaiX)
}

function akhiriDrag() {
  sedangDrag = false
  track.value?.classList.remove('dragging')
}
</script>

<template>
  <section class="partner-section">
    <div class="container py-5">
      <!-- Teks -->
      <div class="text-center mx-auto mb-5" style="max-width: 720px">
        <h6 class="partner-label text-uppercase fw-bold">Partnership</h6>
        <h2 class="partner-title fw-bold mb-3">Let’s Work Together</h2>
        <p class="partner-text mb-4">
          INSA Care partners with companies, schools, communities and event organizers to bring
          professional healthcare closer to their people.
        </p>
        <a
          :href="linkPartner"
          target="_blank"
          rel="noopener"
          class="btn btn-partner btn-lg rounded-pill px-5 fw-bold"
        >
          Partner with INSA <i class="bi bi-arrow-right ms-1"></i>
        </a>
      </div>

      <!-- Slider logo -->
      <div class="partner-slider">
        <button
          type="button"
          class="partner-nav prev"
          aria-label="Geser ke kiri"
          @click="geser(-1)"
        >
          <i class="bi bi-chevron-left"></i>
        </button>

        <div
          ref="track"
          class="partner-track"
          @pointerdown="mulaiDrag"
          @pointermove="saatDrag"
          @pointerup="akhiriDrag"
          @pointerleave="akhiriDrag"
        >
          <div v-for="p in partner" :key="p.nama" class="partner-card">
            <img v-if="p.logo" :src="p.logo" :alt="p.nama" draggable="false" />
            <template v-else>
              <i class="bi" :class="p.ikon"></i>
              <span>{{ p.nama }}</span>
            </template>
          </div>
        </div>

        <button
          type="button"
          class="partner-nav next"
          aria-label="Geser ke kanan"
          @click="geser(1)"
        >
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partner-section {
  --hijau: #4a8c6f;
  --navy: #1f2547;
  --abu: #555b66;
  background: #f3f8fb;
}

.partner-label {
  color: var(--hijau);
  letter-spacing: 0.5px;
}

.partner-title {
  color: var(--navy);
  font-size: clamp(1.8rem, 4.5vw, 3rem);
}

.partner-text {
  color: var(--abu);
  line-height: 1.8;
}

.btn-partner {
  background: var(--hijau);
  color: #fff;
  box-shadow: 0 8px 20px rgba(74, 140, 111, 0.35);
  transition: transform 0.2s, background 0.2s;
}

.btn-partner:hover {
  background: #3b7359;
  color: #fff;
  transform: translateY(-2px);
}

/* Slider */
.partner-slider {
  position: relative;
}

.partner-track {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* Firefox */
  padding: 0.5rem 0.25rem 1rem;
  cursor: grab;
}

.partner-track::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.partner-track.dragging {
  cursor: grabbing;
  scroll-snap-type: none;
  user-select: none;
}

.partner-card {
  flex: 0 0 70%;
  scroll-snap-align: start;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: #fff;
  border: 2px solid #e3f2fd;
  border-radius: 14px;
  color: var(--navy);
  font-weight: 700;
  padding: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.partner-card:hover {
  border-color: var(--hijau);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
}

.partner-card i {
  font-size: 2rem;
  color: var(--hijau);
}

.partner-card img {
  max-width: 100%;
  max-height: 70px;
  object-fit: contain;
}

/* Tombol panah */
.partner-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  z-index: 2;
  width: 44px;
  height: 44px;
  display: none;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background: #fff;
  color: var(--hijau);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  transition: background 0.2s, color 0.2s;
}

.partner-nav:hover {
  background: var(--hijau);
  color: #fff;
}

.partner-nav.prev {
  left: -10px;
}

.partner-nav.next {
  right: -10px;
}

/* Tablet & desktop: beberapa kartu terlihat, panah muncul */
@media (min-width: 576px) {
  .partner-card {
    flex-basis: calc((100% - 1rem) / 2);
  }
}

@media (min-width: 768px) {
  .partner-nav {
    display: flex;
  }
}

@media (min-width: 992px) {
  .partner-card {
    flex-basis: calc((100% - 3rem) / 4);
  }
}
</style>