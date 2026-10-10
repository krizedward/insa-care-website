<script setup>
import PageHeader from '../components/PageHeaderSection.vue'

const info = {
  judul: 'Tentang INSA Care',
  subjudul: 'Melayani dengan sepenuh hati',
  paragraf: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ],
  poin: ['Lorem ipsum dolor sit', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor'],
  judulHome: 'Why Home Is Better?',
  subjudulHome: 'Kenyamanan dan Kesehatan',
  paragrafHome: [
    'Rumah adalah tempat ternyaman untuk mendapatkan perawatan. Dengan lingkungan yang familiar, pasien tetap dekat dengan keluarga dan menjalani rutinitas dengan lebih nyaman. Pemulihan bukan hanya tentang tindakan medis. Dukungan keluarga, suasana yang tenang, dan kenyamanan rumah turut membantu proses pemulihan.',
    'Tidak perlu sering bepergian untuk mendapatkan perawatan. Layanan kesehatan di rumah membantu mengurangi kelelahan dan membuat pasien lebih nyaman selama masa perawatan.',
    'Kelebihan perawatan di rumah ?'
  ],
  poinHome: ['Tempat tidur sendiri', 'Rutinitas tetap terjaga', 'Lingkungan lebih nyaman', 'Dekat keluarga dan teman', 'Waktu lebih fleksibel', ' Tidak perlu sering bepergian']
}
</script>

<template>
  <PageHeader v-if="$route.meta.judul" :judul="$route.meta.judul" :breadcrumb="$route.meta.breadcrumb" />

  <div class="container py-5">
    <!-- Row informasi usaha -->
    <section class="row align-items-center g-4 py-4">
      <!-- Kolom teks (7/12) -->
      <div class="col-md-7">
        <h6 class="text-uppercase text-primary fw-semibold">{{ info.subjudul }}</h6>
        <h2 class="fw-bold mb-3">{{ info.judul }}</h2>

        <p v-for="(p, i) in info.paragraf" :key="i" class="text-muted">
          {{ p }}
        </p>

        <ul class="list-unstyled mb-4">
          <li v-for="item in info.poin" :key="item" class="mb-2">
            <i class="bi bi-check-circle-fill text-primary me-2"></i>{{ item }}
          </li>
        </ul>

        <RouterLink to="/about" class="btn btn-primary">Selengkapnya</RouterLink>
      </div>

      <!-- Kolom gambar/kartu (5/12) -->
      <div class="col-md-5">
        <div class="card shadow-sm border-0">
          <!-- Ganti dengan gambar Anda, misalnya: <img src="@/assets/usaha.jpg" class="card-img-top" alt="Usaha"> -->
          <!-- <div class="ratio ratio-4x3 bg-secondary-subtle rounded-top d-flex align-items-center justify-content-center">
            <i class="bi bi-image fs-1 text-secondary"></i>
          </div> -->
          <img src="https://placehold.co/600x400" class="card-img-top" alt="Usaha">
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text text-muted mb-0">
              Dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>