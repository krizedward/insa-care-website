<script setup>
import PageHeader from '../components/PageHeaderSection.vue'
// import bannerGroup from '../assets/banner-group.jpg'

const info = {
  label: 'Group Care',
  judul: 'Healthcare Services for Companies, Schools & Groups',
  deskripsi:
    'We provide coordinated healthcare services for organizations, schools, and groups, helping create a healthier, safer, and more supportive environment for everyone.'
}

const kelompok = [
  {
    id: 'corporate',
    judul: 'Corporate Care',
    deskripsi: 'Healthcare solutions designed to support employees and workplace wellbeing.',
    ikon: 'bi-building',
    layanan: [
      {
        judul: 'Corporate Vaccination',
        deskripsi: 'Vaccination programs conducted conveniently for employees and corporate teams.',
        ikon: 'bi-shield-plus'
      },
      {
        judul: 'Basic Health Screening',
        deskripsi:
          'Basic health checks to help monitor employees’ general health and wellbeing.',
        ikon: 'bi-clipboard2-pulse'
      },
      {
        judul: 'Health Education',
        deskripsi: 'Health awareness programs and educational sessions tailored to workplace needs.',
        ikon: 'bi-journal-medical'
      },
      {
        judul: 'Selected On-site Services',
        deskripsi: 'Selected healthcare services delivered directly at your workplace.',
        ikon: 'bi-geo-alt'
      }
    ]
  },
  {
    id: 'education',
    judul: 'Education Care',
    deskripsi:
      'Healthcare services designed to support the health and wellbeing of students, teachers, and school communities.',
    ikon: 'bi-mortarboard',
    layanan: [
      {
        judul: 'School Vaccination',
        deskripsi: 'Organized vaccination programs for students and school communities.',
        ikon: 'bi-shield-plus'
      },
      {
        judul: 'Student Health Screening',
        deskripsi:
          'Basic health screening to support early awareness of students’ health conditions.',
        ikon: 'bi-clipboard2-pulse'
      },
      {
        judul: 'Health Education',
        deskripsi:
          'Educational programs that promote healthy habits and health awareness among students.',
        ikon: 'bi-journal-medical'
      },
      {
        judul: 'Selected On-site Services',
        deskripsi:
          'Selected healthcare services provided directly at schools or educational institutions.',
        ikon: 'bi-geo-alt'
      }
    ]
  }
]

// Ubah ke false jika bagian ini hanya catatan internal dan tidak ingin ditampilkan
const tampilkanStruktur = true

const struktur = {
  awal: {
    judul: 'GROUP CARE',
    deskripsi: 'Healthcare for Organizations, Schools & Groups.'
  },
  lanjut: [
    {
      judul: 'CORPORATE CARE',
      deskripsi: 'Healthcare solutions for companies & employees.',
      ikon: 'bi-building'
    },
    {
      judul: 'EDU CARE',
      deskripsi: 'Healthcare solutions for schools & students.',
      ikon: 'bi-mortarboard'
    }
  ]
}
</script>

<template>
  <PageHeader
    judul="Group Care"
    :breadcrumb="[
      { label: 'Home', to: '/' },
      { label: 'Services' },
      { label: 'Group Care' }
    ]"
  />
  <!-- tambahkan :gambar="bannerGroup" jika sudah ada gambar -->

  <section class="group-page">
    <!-- Pengantar -->
    <div class="container py-5">
      <div class="text-center mx-auto" style="max-width: 760px">
        <h6 class="group-label text-uppercase fw-bold">{{ info.label }}</h6>
        <h2 class="group-title fw-bold mb-3">{{ info.judul }}</h2>
        <p class="group-text mb-0">{{ info.deskripsi }}</p>
      </div>
    </div>

    <!-- Corporate & Education (selang-seling warna latar) -->
    <div
      v-for="(k, i) in kelompok"
      :key="k.id"
      :id="k.id"
      class="group-block py-5"
      :class="{ 'group-block-alt': i % 2 === 0 }"
    >
      <div class="container">
        <div class="d-flex align-items-start gap-3 mb-4">
          <div class="group-icon flex-shrink-0">
            <i class="bi" :class="k.ikon"></i>
          </div>
          <div>
            <h3 class="group-heading fw-bold mb-1">{{ k.judul }}</h3>
            <p class="group-text mb-0">{{ k.deskripsi }}</p>
          </div>
        </div>

        <div class="row g-4">
          <div v-for="item in k.layanan" :key="item.judul" class="col-12 col-sm-6 col-lg-3">
            <div class="group-card h-100">
              <i class="bi group-card-icon" :class="item.ikon"></i>
              <h5 class="group-card-title fw-bold">{{ item.judul }}</h5>
              <p class="group-text mb-0">{{ item.deskripsi }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scalable Service Structure -->
    <div v-if="tampilkanStruktur" class="container py-5">
      <div class="text-center mb-4">
        <h6 class="group-label text-uppercase fw-bold">Scalable Service Structure</h6>
        <p class="group-text mx-auto mb-0" style="max-width: 680px">
          Untuk tahap awal, Corporate dan Education berada dalam satu kategori utama. Seiring
          bertambahnya volume, kebutuhan, dan program layanan, struktur ini dapat dikembangkan.
        </p>
      </div>

      <!-- Tahap awal -->
      <div class="struktur-box struktur-awal mx-auto text-center">
        <h5 class="fw-bold mb-1">{{ struktur.awal.judul }}</h5>
        <p class="mb-0">{{ struktur.awal.deskripsi }}</p>
      </div>

      <div class="text-center my-3 struktur-arrow">
        <i class="bi bi-arrow-down-circle-fill"></i>
      </div>

      <!-- Tahap lanjut -->
      <div class="row g-4 justify-content-center">
        <div v-for="s in struktur.lanjut" :key="s.judul" class="col-12 col-md-5">
          <div class="struktur-box text-center h-100">
            <i class="bi" :class="s.ikon"></i>
            <h5 class="fw-bold mt-2 mb-1">{{ s.judul }}</h5>
            <p class="mb-0">{{ s.deskripsi }}</p>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<style scoped>
.group-page {
  --hijau: #4a8c6f;
  --navy: #1f2547;
  --abu: #555b66;
}

.group-label {
  color: var(--hijau);
  letter-spacing: 0.5px;
}

.group-title {
  color: var(--navy);
  font-size: clamp(1.8rem, 4.5vw, 3rem);
}

.group-heading {
  color: var(--navy);
}

.group-text {
  color: var(--abu);
  line-height: 1.8;
}

/* Blok kelompok */
.group-block-alt {
  background: #f3f8fb;
}

.group-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #dee2e6;
  border-radius: 14px;
  background: #fff;
  color: var(--hijau);
  font-size: 2rem;
}

/* Kartu layanan */
.group-card {
  background: #fff;
  border: 2px solid #e3f2fd;
  border-radius: 14px;
  padding: 1.8rem 1.4rem;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.group-card:hover {
  transform: translateY(-5px);
  border-color: var(--hijau);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}

.group-card-icon {
  display: inline-block;
  font-size: 2rem;
  color: var(--hijau);
  margin-bottom: 0.8rem;
}

.group-card-title {
  color: var(--navy);
  margin-bottom: 0.5rem;
}

/* Struktur */
.struktur-box {
  max-width: 520px;
  padding: 1.5rem;
  border: 2px dashed var(--hijau);
  border-radius: 14px;
  background: #fff;
  color: var(--navy);
}

.struktur-box i {
  font-size: 2rem;
  color: var(--hijau);
}

.struktur-box p {
  color: var(--abu);
}

.struktur-awal {
  background: var(--hijau);
  border-style: solid;
  color: #fff;
}

.struktur-awal p {
  color: #fff;
}

.struktur-arrow {
  font-size: 2rem;
  color: var(--hijau);
}

</style>