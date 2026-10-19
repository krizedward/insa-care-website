<script setup>
import { computed, ref } from 'vue'
import PageHeader from '../components/PageHeaderSection.vue'
import ProfessionalSection from '../components/ProfessionalSection.vue'
import WhyInsa from '../components/WhyInsaSection.vue'
import PartnershipCta from '../components/PartnershipCtaSection.vue'

/* ---------- Update #2 ---------- */
const nomorWA = '6288989847142'
const linkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(
  'Halo INSAcare, saya ingin bertanya tentang layanan kesehatan.'
)}`

/* ---------- Pengantar ---------- */
const tentang = {
  label: 'About INSA Care',
  judul: 'Healthcare That Grows From Real Medical Practice',
  paragraf: [
    'INSA Care saat ini berkembang dari praktik dr. Michael Hadinata, M.Kes, SIP.',
    'Fondasi medis tersebut menjadi dasar bagi INSA Care dalam menghadirkan layanan kesehatan profesional yang lebih dekat dengan keluarga, organisasi, dan komunitas.'
  ]
}

/* ---------- Dokter ---------- */
// Isi `foto` dengan foto asli dokter, contoh:
// foto: new URL('../assets/dr-michael.jpg', import.meta.url).href
// Selama kosong, tampil inisial (bukan foto palsu).
const dokter = {
  nama: 'dr. Michael Hadinata, M.Kes., KMK., CHLQM',
  peran: 'General Practitioner',
  inisial: 'MH',
  foto: new URL('../assets/images/dr_michael.jpg', import.meta.url).href
}

/* ---------- Our Care Partners (isi hanya jika sudah benar-benar bekerja sama) ---------- */
const urutanPeran = [
  'Doctors',
  'Nurses',
  'Midwives',
  'Physiotherapists',
  'Other Healthcare Professionals'
]

// Biarkan kosong jika belum ada. Section otomatis disembunyikan.
// Contoh:
// { nama: 'Nama Tenaga Kesehatan', peran: 'Nurses', jabatan: 'Registered Nurse', foto: new URL('../assets/team/nama.jpg', import.meta.url).href }
const carePartners = [
  // { nama: 'Nama Tenaga Kesehatan', peran: 'Nurses', jabatan: 'Registered Nurse', foto: new URL('../assets/team/nama.jpg', import.meta.url).href },
  // { nama: 'Nama Tenaga Kesehatan', peran: 'Nurses', jabatan: 'Registered Nurse', foto: new URL('../assets/team/nama.jpg', import.meta.url).href },
  // { nama: 'Nama Tenaga Kesehatan', peran: 'Nurses', jabatan: 'Registered Nurse', foto: new URL('../assets/team/nama.jpg', import.meta.url).href }
]

const aktif = ref('Semua')

const peranTersedia = computed(() => {
  const ada = urutanPeran.filter((p) => carePartners.some((c) => c.peran === p))
  return ada.length > 1 ? ['Semua', ...ada] : []
})

const tampil = computed(() =>
  aktif.value === 'Semua' ? carePartners : carePartners.filter((c) => c.peran === aktif.value)
)
/* ---------- Update #1 ---------- */
const info = {
  judul: 'Solusi Homecare untuk Anda',
  subjudul: 'Melayani dengan sepenuh hati',
  paragraf: [
    'Merawat orang tercinta kini lebih mudah bersama INSA Care. Kami hadir membantu Anda mendapatkan layanan perawatan kesehatan di rumah yang nyaman, praktis, dan sesuai kebutuhan, tanpa harus selalu pergi ke fasilitas kesehatan.',
    'Kami memahami bahwa menemukan pendamping dan tenaga kesehatan yang tepat untuk orang tercinta bukanlah hal yang mudah. Karena itu, INSA Care hadir untuk membantu Anda dan keluarga menjalani proses perawatan dengan lebih tenang, melalui layanan homecare yang mengutamakan kepedulian, kenyamanan, dan kualitas pelayanan.'
  ],
  poin: ['Solusi perawatan kesehatan langsung di tempat', 'Layanan yang menyesuaikan kebutuhan pasien', 'Pendampingan dengan mengutamakan kenyamanan dan kepedulian'],
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

        <!-- <RouterLink to="/about" class="btn btn-primary">Selengkapnya</RouterLink> -->
      </div>

      <!-- Kolom gambar/kartu (5/12) -->
      

      <div class="col-md-5">
        <div class="card shadow-sm border-0 rounded-4 overflow-hidden">
          <img
            src="../assets/images/about_logo_insacare.jpeg"
            class="card-img-top"
            alt="INSA Care"
          />
        </div>
      </div>
    </section>
  </div>

  <!-- Row Update #2 -->
  <section class="about-page">
    <!-- Pengantar -->
    <div class="container py-5">
      <div class="text-center mx-auto" style="max-width: 760px">
        <h6 class="about-label text-uppercase fw-bold">{{ tentang.label }}</h6>
        <h2 class="about-title fw-bold mb-3">{{ tentang.judul }}</h2>
        <p v-for="(p, i) in tentang.paragraf" :key="i" class="about-text mb-2">{{ p }}</p>
      </div>
    </div>

    <!-- Meet the Doctor -->
    <div class="about-block py-5">
      <div class="container">
        <div class="row gy-4 gx-md-5 align-items-center">
          <div class="col-md-5">
            <div class="doctor-photo">
              <img v-if="dokter.foto" :src="dokter.foto" :alt="dokter.nama" />
              <div v-else class="doctor-initial">{{ dokter.inisial }}</div>
            </div>
          </div>

          <div class="col-md-7">
            <h6 class="about-label text-uppercase fw-bold">The Doctor Behind INSA Care</h6>
            <h2 class="about-title fw-bold mb-3">Meet the Doctor Behind INSA Care</h2>

            <h4 class="doctor-name fw-bold mb-1">{{ dokter.nama }}</h4>
            <p class="doctor-role mb-4">
              <i class="bi bi-heart-pulse me-2"></i>{{ dokter.peran }}
            </p>

            <p class="about-text mb-4">
              INSA Care berkembang dari praktik dr. Michael Hadinata. Kredibilitas medis INSA
              berakar pada pengalaman praktik langsung, sehingga setiap layanan dirancang dengan
              perhatian pada keselamatan dan kebutuhan pasien.
            </p>

            <RouterLink to="/care-at-home" class="btn btn-primary btn-lg rounded-pill px-5 fw-bold">Our Services</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Care Partners: tampil hanya jika data tersedia -->
    <div v-if="carePartners.length" class="container py-5">
      <div class="text-center mx-auto mb-4" style="max-width: 720px">
        <h6 class="about-label text-uppercase fw-bold">Our Team</h6>
        <h2 class="about-title fw-bold mb-3">Our Care Partners</h2>
        <p class="about-text mb-0">
          Healthcare professionals who work together with INSA Care.
        </p>
      </div>

      <div v-if="peranTersedia.length" class="d-flex flex-wrap justify-content-center gap-2 mb-4">
        <button
          v-for="p in peranTersedia"
          :key="p"
          type="button"
          class="about-chip"
          :class="{ active: aktif === p }"
          @click="aktif = p"
        >
          {{ p }}
        </button>
      </div>

      <div class="row g-4 justify-content-center">
        <div v-for="c in tampil" :key="c.nama" class="col-6 col-md-4 col-lg-3">
          <div class="care-card text-center h-100">
            <img v-if="c.foto" :src="c.foto" :alt="c.nama" class="care-foto" />
            <h6 class="fw-bold mt-3 mb-1">{{ c.nama }}</h6>
            <p class="about-text small mb-0">{{ c.jabatan || c.peran }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-4">
      <ProfessionalSection />
    </div>

    <div class="container py-4">
      <WhyInsa />
    </div>

    <div class="container py-4">
      <PartnershipCta />
    </div>

    <!-- CTA -->
    <!-- <div class="about-cta text-center text-white">
      <div class="container py-5">
        <h3 class="fw-bold mb-4">Ingin tahu lebih lanjut tentang layanan kami?</h3>
        <a
          :href="linkWA"
          target="_blank"
          rel="noopener"
          class="btn btn-light btn-lg rounded-pill px-5 fw-bold text-uppercase about-btn"
        >
          <i class="bi bi-whatsapp me-2"></i>Hubungi Kami
        </a>
      </div>
    </div> -->
  </section>
</template>

<style scoped>
.about-page {
  --hijau: #4a8c6f;
  --navy: #1f2547;
  --abu: #555b66;
}

.about-label {
  color: var(--hijau);
  letter-spacing: 0.5px;
}

.about-title {
  color: var(--navy);
  font-size: clamp(1.8rem, 4.5vw, 3rem);
}

.about-text {
  color: var(--abu);
  line-height: 1.8;
}

.about-block {
  background: #f3f8fb;
}

/* Foto dokter */
.doctor-photo {
  aspect-ratio: 4 / 5;
  border-radius: 14px;
  overflow: hidden;
  border: 5px solid #e3f2fd;
  background: #fff;
}

.doctor-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.doctor-initial {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 700;
  color: var(--hijau);
  background: #eaf4ef;
}

.doctor-name {
  color: var(--navy);
}

.doctor-role {
  color: var(--hijau);
  font-weight: 600;
}

/* Tombol (sama dengan navbar) */
.btn-appointment {
  background: var(--hijau);
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding: 0.75rem 1.8rem;
  border-radius: 50rem;
  box-shadow: 0 8px 20px rgba(74, 140, 111, 0.35);
}

.btn-appointment:hover {
  background: #3b7359;
  color: #fff;
}

/* Care partners */
.about-chip {
  border: 2px solid #e3f2fd;
  background: #fff;
  color: var(--navy);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.45rem 1.1rem;
  border-radius: 50rem;
  transition: all 0.2s;
}

.about-chip:hover {
  border-color: var(--hijau);
  color: var(--hijau);
}

.about-chip.active {
  background: var(--hijau);
  border-color: var(--hijau);
  color: #fff;
}

.care-card {
  background: #fff;
  border: 2px solid #e3f2fd;
  border-radius: 14px;
  padding: 1.2rem;
}

.care-foto {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 12px;
}

/* CTA */
.about-cta {
  background: var(--hijau);
}

.about-btn {
  color: var(--hijau);
}
</style>