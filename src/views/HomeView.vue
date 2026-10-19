<script setup>
import ServiceSection from '../components/ServiceSection.vue'
import ProfessionalSection from '../components/ProfessionalSection.vue'
import BannerSection from '../components/BannerSection.vue'
import WhyHomeSection from '../components/WhyHomeSection.vue'
import OurPartners from '../components/OurPartnersSection.vue'
import PageBanner from '../components/PageBanner.vue'

import banner1 from '../assets/images/slider/s-1.png'
import banner2 from '../assets/images/slider/s-2.png'
import banner3 from '../assets/images/slider/s-3.png'
// import banner3 from '../assets/images/slider/s-3.png'

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

const slides = [
  {
    gambar: banner1,
    judul: 'Perawatan Profesional di Rumah Anda',
    subjudul: 'Dokter, perawat, bidan, dan fisioterapi siap datang ke rumah.'
  },
  {
    gambar: banner2,
    judul: 'Layanan Kesehatan untuk Sekolah & Perusahaan',
    subjudul: 'Vaksinasi, skrining, dan edukasi kesehatan langsung di lokasi.'
  },
  {
    gambar: banner3,
    judul: 'Dukungan Medis untuk Acara Anda',
    subjudul: 'Tenaga kesehatan siaga untuk keselamatan peserta dan tamu.'
  }
]
</script>

<!-- <template>
  <div class="home">
    <h1>{{ judul }}</h1>
    <p>Ini adalah halaman utama.</p>
  </div>
</template> -->

<template>

  <!-- <BannerSection
    judul="INSA Care"
    subjudul="Professional Care, Closer to You."
    src="https://placehold.co/1200x400"
    tinggi="400px"/> -->
  
  <PageBanner :slides="slides" tinggi="520px">
    <RouterLink to="/care-at-home" class="btn btn-light btn-lg rounded-pill px-4 fw-bold">
      Lihat Layanan
    </RouterLink>
  </PageBanner>
  
  <div class="container py-4">
    <ServiceSection />
  </div>

  <div class="container py-4">
    <WhyHomeSection />
  </div>

  <div class="container py-4">
    <ProfessionalSection />
  </div>

  <div class="container py-4">
    <OurPartners />
  </div>

</template>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
</style>