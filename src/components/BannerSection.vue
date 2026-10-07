<script setup>
defineProps({
  judul: { type: String, required: true },
  subjudul: { type: String, default: '' },
  gambar: { type: String, default: '' },
  tinggi: { type: String, default: '380px' }
})
</script>

<template>
  <section
    class="page-banner d-flex align-items-center text-white text-center"
    :style="{
      minHeight: tinggi,
      backgroundImage: gambar ? `url(${gambar})` : 'none'
    }"
  >
    <div class="banner-overlay"></div>

    <div class="container position-relative py-5">
      <h1 class="display-4 fw-bold">{{ judul }}</h1>
      <p v-if="subjudul" class="lead mb-4">{{ subjudul }}</p>

      <!-- Slot opsional untuk tombol atau isi tambahan -->
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.page-banner {
  position: relative;
  background-color: #4a8c6f; /* warna cadangan jika tanpa gambar */
  background-size: cover;
  background-position: center;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: rgba(31, 37, 71, 0.55); /* lapisan gelap agar teks terbaca */
}
</style>