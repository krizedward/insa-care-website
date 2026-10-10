<script setup>
import PageHeader from '../components/PageHeaderSection.vue'

const info = {
  label: 'Care At Home',
  judul: 'Healthcare for Individuals & Families',
  deskripsi:
    'Get professional healthcare services without leaving the comfort of your home. Our home care services are designed to provide convenient, personalized, and reliable healthcare for individuals and families.'
}

const layanan = [
  {
    judul: 'Doctor Home Visit',
    deskripsi: 'Professional medical consultation and examination in the comfort of your home.',
    ikon: 'bi-heart-pulse'
  },
  {
    judul: 'Nursing & Medical Procedures',
    deskripsi:
      'Professional nursing care and basic medical procedures based on your healthcare needs.',
    ikon: 'bi-bandaid'
  },
  {
    judul: 'Midwife Services',
    deskripsi: 'Personalized maternal and newborn care provided by qualified midwives at home.',
    ikon: 'bi-balloon-heart'
  },
  {
    judul: 'Physiotherapy',
    deskripsi: 'Personalized physiotherapy to support recovery, mobility, and physical function.',
    ikon: 'bi-activity'
  },
  {
    judul: 'Vaccination',
    deskripsi: 'Convenient vaccination services delivered safely at home.',
    ikon: 'bi-shield-plus'
  },
  {
    judul: 'Basic Health Services',
    deskripsi: 'Basic health checks and healthcare support for individuals and families.',
    ikon: 'bi-clipboard2-pulse'
  }
]
</script>

<template>
  <PageHeader v-if="$route.meta.judul" :judul="$route.meta.judul" :breadcrumb="$route.meta.breadcrumb" />
  
  <!-- Pengantar -->
  <section class="care-page">
    <div class="container py-5">
      <div class="text-center mx-auto mb-5" style="max-width: 760px">
        <h6 class="care-label text-uppercase fw-bold">{{ info.label }}</h6>
        <h2 class="care-title fw-bold mb-3">{{ info.judul }}</h2>
        <p class="care-text mb-0">{{ info.deskripsi }}</p>
      </div>

      <!-- Daftar layanan -->
      <h4 class="care-subtitle fw-bold text-center mb-4">Our Home Care Services</h4>

      <div class="row g-4">
        <div v-for="item in layanan" :key="item.judul" class="col-12 col-md-6 col-lg-4">
          <div class="care-card h-100">
            <div class="care-icon">
              <i class="bi" :class="item.ikon"></i>
            </div>
            <h5 class="care-card-title fw-bold">{{ item.judul }}</h5>
            <p class="care-text mb-0">{{ item.deskripsi }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.care-page {
  --hijau: #4a8c6f;
  --navy: #1f2547;
  --abu: #555b66;
}

.care-label {
  color: var(--hijau);
  letter-spacing: 0.5px;
}

.care-title {
  color: var(--navy);
  font-size: clamp(1.8rem, 4.5vw, 3rem);
}

.care-subtitle {
  color: var(--navy);
}

.care-text {
  color: var(--abu);
  line-height: 1.8;
}

/* Kartu layanan */
.care-card {
  background: #fff;
  border: 2px solid #e3f2fd;
  border-radius: 14px;
  padding: 2rem 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.care-card:hover {
  transform: translateY(-5px);
  border-color: var(--hijau);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}

.care-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #eaf4ef;
  color: var(--hijau);
  font-size: 1.9rem;
  margin-bottom: 1.2rem;
}

.care-card-title {
  color: var(--navy);
  margin-bottom: 0.6rem;
}
</style>