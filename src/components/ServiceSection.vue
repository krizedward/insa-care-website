<script setup>
const layanan = [
  {
    judul: 'Baby Care',
    deskripsi: 'Perawatan penuh perhatian untuk bayi dan anak kecil.',
    ikon: 'bi-person-arms-up'
  },
  {
    judul: 'Adult Care',
    deskripsi: 'Perawatan untuk dewasa dengan kebutuhan khusus.',
    ikon: 'bi-person-fill'
  },
  {
    judul: 'Elderly Care',
    deskripsi: 'Perawatan untuk lansia dengan kebutuhan medis yang spesifik.',
    ikon: 'bi-people-fill'
  }
]
</script>

<template>
  <section class="service-section py-5">
    <!-- Judul -->
    <div class="text-center mb-5">
      <h6 class="service-label text-uppercase fw-bold">We Are Care</h6>
      <h2 class="service-title fw-bold">For Every Generation.</h2>
    </div>

    <!-- 3 kolom -->
    <div class="row g-4">
      <div v-for="item in layanan" :key="item.judul" class="col-12 col-md-4">
        <div class="d-flex align-items-start gap-3">
          <div class="service-icon flex-shrink-0">
            <i class="bi" :class="item.ikon"></i>
          </div>
          <div>
            <h5 class="service-name fw-bold mb-2">{{ item.judul }}</h5>
            <p class="service-desc mb-0">{{ item.deskripsi }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-section {
  --hijau: #4a8c6f;
  --navy: #1f2547;
  --abu: #555b66;
}

.service-label {
  color: var(--hijau);
  letter-spacing: 0.5px;
}

.service-title {
  color: var(--navy);
  font-size: clamp(2rem, 5vw, 3.5rem);
}

.service-name {
  color: var(--navy);
  font-size: 1.4rem;
}

.service-desc {
  color: var(--abu);
  line-height: 1.8;
}

/* Kotak ikon */
.service-icon {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #dee2e6;
  border-radius: 14px;
  background: #fff;
  color: var(--hijau);
  font-size: 2.3rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.service-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}
</style>