<script setup>
import { ref, computed } from 'vue'

// Urutan kategori yang diizinkan (sesuai daftar dari INSA)
const urutanKategori = [
  'Companies',
  'Schools',
  'Event Organizers',
  'Sports Communities',
  'Residential Communities',
  'Healthcare Partners',
  'Pharmacies',
  'Laboratories',
  'Other Organizations'
]

// ISI HANYA PARTNER YANG SUDAH BENAR-BENAR BEKERJA SAMA DENGAN INSA.
// Biarkan array kosong jika belum ada. Section akan otomatis disembunyikan.
//
// Contoh format (hapus tanda komentar jika sudah ada partner nyata):
// {
//   nama: 'Nama Organisasi',
//   kategori: 'Schools',
//   logo: new URL('../assets/partners/nama-organisasi.png', import.meta.url).href,
//   url: 'https://contoh.com' // opsional
// }
const partner = [
  //
  {
    nama: 'Nama Organisasi',
    kategori: 'Schools',
    logo: new URL('../assets/partners/nama-organisasi.png', import.meta.url).href,
    url: 'https://contoh.com' // opsional
  },
  {
    nama: 'Nama Organisasi',
    kategori: 'Schools',
    logo: new URL('../assets/partners/nama-organisasi.png', import.meta.url).href,
    url: 'https://contoh.com' // opsional
  },
  {
    nama: 'Nama Organisasi',
    kategori: 'Schools',
    logo: new URL('../assets/partners/nama-organisasi.png', import.meta.url).href,
    url: 'https://contoh.com' // opsional
  }
]

const aktif = ref('Semua')

// Kategori yang ditampilkan hanya yang punya partner
const kategoriTersedia = computed(() => {
  const ada = urutanKategori.filter((k) => partner.some((p) => p.kategori === k))
  return ada.length > 1 ? ['Semua', ...ada] : []
})

const tampil = computed(() =>
  aktif.value === 'Semua' ? partner : partner.filter((p) => p.kategori === aktif.value)
)
</script>

<template>
  <section v-if="partner.length" class="op-section">
    <div class="container py-5">
      <div class="text-center mx-auto mb-4" style="max-width: 720px">
        <h6 class="op-label text-uppercase fw-bold">Partners</h6>
        <h2 class="op-title fw-bold mb-3">Our Partners</h2>
        <p class="op-text mb-0">
          We work with organizations and communities to make professional healthcare more
          accessible.
        </p>
      </div>

      <!-- Filter kategori (hanya muncul jika ada lebih dari satu kategori) -->
      <div
        v-if="kategoriTersedia.length"
        class="d-flex flex-wrap justify-content-center gap-2 mb-4"
      >
        <button
          v-for="k in kategoriTersedia"
          :key="k"
          type="button"
          class="op-chip"
          :class="{ active: aktif === k }"
          @click="aktif = k"
        >
          {{ k }}
        </button>
      </div>

      <!-- Grid logo -->
      <div class="row g-3 g-md-4 justify-content-center">
        <div v-for="p in tampil" :key="p.nama" class="col-6 col-md-4 col-lg-3">
          <component
            :is="p.url ? 'a' : 'div'"
            :href="p.url || undefined"
            :target="p.url ? '_blank' : undefined"
            :rel="p.url ? 'noopener' : undefined"
            class="op-card"
            :title="p.nama"
          >
            <img :src="p.logo" :alt="p.nama" loading="lazy" />
            <span class="op-kategori">{{ p.kategori }}</span>
          </component>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.op-section {
  --hijau: #4a8c6f;
  --navy: #1f2547;
  --abu: #555b66;
}

.op-label {
  color: var(--hijau);
  letter-spacing: 0.5px;
}

.op-title {
  color: var(--navy);
  font-size: clamp(1.8rem, 4.5vw, 3rem);
}

.op-text {
  color: var(--abu);
  line-height: 1.8;
}

/* Filter */
.op-chip {
  border: 2px solid #e3f2fd;
  background: #fff;
  color: var(--navy);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.45rem 1.1rem;
  border-radius: 50rem;
  transition: all 0.2s;
}

.op-chip:hover {
  border-color: var(--hijau);
  color: var(--hijau);
}

.op-chip.active {
  background: var(--hijau);
  border-color: var(--hijau);
  color: #fff;
}

/* Kartu logo */
.op-card {
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem;
  background: #fff;
  border: 2px solid #e3f2fd;
  border-radius: 14px;
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.op-card:hover {
  border-color: var(--hijau);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
  transform: translateY(-3px);
}

.op-card img {
  max-width: 100%;
  max-height: 70px;
  object-fit: contain;
  filter: grayscale(1);
  opacity: 0.8;
  transition: filter 0.2s, opacity 0.2s;
}

.op-card:hover img {
  filter: none;
  opacity: 1;
}

.op-kategori {
  font-size: 0.78rem;
  color: var(--abu);
  text-transform: uppercase;
  letter-spacing: 0.4px;
}
</style>