<script setup>
const info = {
  judul: 'Why Home Is Better?',
  paragraf: [
    'Rumah adalah tempat ternyaman untuk mendapatkan perawatan. Dengan lingkungan yang familiar, pasien tetap dekat dengan keluarga dan menjalani rutinitas dengan lebih nyaman. Pemulihan bukan hanya tentang tindakan medis. Dukungan keluarga, suasana yang tenang, dan kenyamanan rumah turut membantu proses pemulihan.',
    'Tidak perlu sering bepergian untuk mendapatkan perawatan. Layanan kesehatan di rumah membantu mengurangi kelelahan dan membuat pasien lebih nyaman selama masa perawatan.'
  ],
  pertanyaan: 'Kelebihan perawatan di rumah ?',
  poin: [
    'Tempat tidur sendiri',
    'Dekat keluarga dan teman',
    'Rutinitas tetap terjaga',
    'Waktu lebih fleksibel',
    'Lingkungan lebih nyaman',
    'Tidak perlu sering bepergian'
  ]
}
</script>

<template>
  <section class="why-section py-5">
    <div class="row gy-4 gx-md-5">
      <!-- Gambar kiri -->
      <div class="col-md-5">
        <img src="https://placehold.co/1200x400" alt="Perawatan di rumah" class="why-img" />
      </div>

      <!-- Teks kanan -->
      <div class="col-md-7 d-flex flex-column">
        <h6 class="text-uppercase text-primary fw-semibold"> info.subjudulHome </h6>
        <h2 class="why-title fw-bold mb-4">{{ info.judul }}</h2>

        <p v-for="(p, i) in info.paragraf" :key="i" class="why-text mb-4">
          {{ p }}
        </p>

        <p class="why-text mb-3">{{ info.pertanyaan }}</p>

        <!-- Daftar 2 kolom -->
        <div class="row g-3 mb-4">
          <div v-for="item in info.poin" :key="item" class="col-12 col-sm-6">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-check-circle why-icon"></i>
              <span class="why-item">{{ item }}</span>
            </div>
          </div>
        </div>

        <!-- Tombol full, menempel di bagian bawah kolom -->
        <RouterLink to="/about" class="btn btn-primary w-100 mt-auto">
          Selengkapnya
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-section {
  --hijau: #4a8c6f;
  --navy: #1f2547;
  --abu: #555b66;
}

.why-img {
  width: 100%;
  height: 100%;        /* ikut tinggi kolom teks */
  min-height: 320px;   /* batas minimal di HP */
  object-fit: cover;
  border-radius: 4px;
  display: block;
}

.why-title {
  color: var(--navy);
  font-size: clamp(2rem, 4.5vw, 3rem);
}

.why-text {
  color: var(--abu);
  line-height: 1.9;
  text-align: justify;
}

.why-icon {
  color: var(--hijau);
  font-size: 1.2rem;
}

.why-item {
  color: var(--navy);
  font-size: 1.05rem;
}
</style>