<script setup>
import { RouterLink } from 'vue-router'

const layanan = [
  {
    judul: 'Care At Home',
    deskripsi: 'Healthcare for individuals & families.',
    ikon: 'bi-house-heart',
    to: '/services/care-at-home'
  },
  {
    judul: 'Group Care',
    deskripsi: 'Healthcare services for companies, schools and groups.',
    ikon: 'bi-buildings',
    to: '/services/group-care'
  },
  {
    judul: 'Event Medical Support',
    deskripsi: 'Healthcare support for selected events.',
    ikon: 'bi-calendar2-heart',
    to: '/services/event-medical-support'
  }
]
</script>

<template>
  <section class="service-section py-5">
    <div class="text-center mb-5">
      <h6 class="service-label text-uppercase fw-bold">Our Care</h6>
      <h2 class="service-title fw-bold">Who We Care For</h2>
    </div>

    <div class="row g-4">
      <div v-for="item in layanan" :key="item.judul" class="col-12 col-md-4">
        <RouterLink :to="item.to" class="service-link d-flex align-items-start gap-3">
          <div class="service-icon flex-shrink-0">
            <i class="bi" :class="item.ikon"></i>
          </div>
          <div>
            <h5 class="service-name fw-bold mb-2">{{ item.judul }}</h5>
            <p class="service-desc mb-0">{{ item.deskripsi }}</p>
          </div>
        </RouterLink>
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
  text-transform: uppercase;
}

.service-name {
  color: var(--navy);
  font-size: 1.4rem;
  transition: color 0.2s;
}

.service-desc {
  color: var(--abu);
  line-height: 1.8;
}

.service-link {
  text-decoration: none;
  color: inherit;
}

.service-link:hover .service-name {
  color: var(--hijau);
}

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
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.service-link:hover .service-icon {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  border-color: var(--hijau);
}
</style>