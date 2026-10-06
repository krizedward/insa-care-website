<script setup>
// Simpan gambar di src/assets/services/
const layanan = [
  {
    judul: 'Doctor Home Visit',
    gambar: new URL('../assets/services/doctor.jpg', import.meta.url).href
  },
  {
    judul: 'Nursing Care Home Visit',
    gambar: new URL('../assets/services/nurse.jpg', import.meta.url).href
  },
  {
    judul: 'Midwife Services',
    gambar: new URL('../assets/services/midwife.jpg', import.meta.url).href
  },
  {
    judul: 'Physiotherapy Home Visit',
    gambar: new URL('../assets/services/physio.jpg', import.meta.url).href
  }
]
</script>

<template>
  <section class="pro-section py-5">
    <!-- Judul -->
    <div class="text-center mb-5">
      <h6 class="pro-label text-uppercase fw-bold">Professional Care</h6>
      <h2 class="pro-title fw-bold">Professional Support Right At Home</h2>
    </div>

    <!-- 4 kartu -->
    <div class="row g-4">
      <div v-for="item in layanan" :key="item.judul" class="col-12 col-sm-6 col-lg-3">
        <div class="pro-card h-100">
          <img src="https://placehold.co/600x400" :alt="item.judul" class="pro-img" />
          <div class="pro-body">
            <h5 class="pro-name fw-bold mb-0">{{ item.judul }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pro-section {
  --hijau: #4a8c6f;
  --navy: #1f2547;
  --biru-muda: #e3f2fd;
}

.pro-label {
  color: var(--hijau);
  letter-spacing: 0.5px;
}

.pro-title {
  color: var(--navy);
  font-size: clamp(1.8rem, 4.5vw, 3.2rem);
}

/* Kartu */
.pro-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  transition: transform 0.2s, box-shadow 0.2s;
}

.pro-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.pro-img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  display: block;
}

/* Bagian teks dengan border biru muda tebal */
.pro-body {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 1.5rem 1rem 3rem;
  text-align: center;
  border: 5px solid var(--biru-muda);
  border-top: 0;
}

.pro-name {
  color: var(--navy);
  font-size: 1.4rem;
  line-height: 1.3;
}
</style>