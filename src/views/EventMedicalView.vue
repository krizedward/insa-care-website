<script setup>
import PageHeader from '../components/PageHeaderSection.vue'
// import bannerEvent from '../assets/banner-event.jpg'

const info = {
  label: 'Event Medical Support',
  judul: 'Healthcare Support for Selected Events',
  paragraf: [
    'Reliable on-site healthcare support designed to help keep participants, staff, and guests safe during selected events.',
    'Our medical support can be tailored to the specific needs of each event, with services provided by qualified healthcare professionals.'
  ]
}

const cocok = [
  {
    judul: 'Sports Tournaments',
    deskripsi: 'Medical support for sporting activities and competitions.',
    ikon: 'bi-trophy'
  },
  {
    judul: 'School Events',
    deskripsi: 'Healthcare support for students, teachers, and event participants.',
    ikon: 'bi-mortarboard'
  },
  {
    judul: 'Corporate Events',
    deskripsi:
      'Medical assistance for meetings, gatherings, team activities, and corporate programs.',
    ikon: 'bi-building'
  },
  {
    judul: 'Exhibitions & Public Events',
    deskripsi: 'On-site medical support for exhibitors, staff, and visitors.',
    ikon: 'bi-megaphone'
  },
  {
    judul: 'Community Gatherings',
    deskripsi: 'Basic healthcare and first-aid support for community activities and gatherings.',
    ikon: 'bi-people'
  }
]

const layanan = [
  {
    judul: 'Doctor / Nurse Standby',
    deskripsi:
      'Healthcare professionals available on-site throughout the agreed event period.',
    ikon: 'bi-person-badge'
  },
  {
    judul: 'Basic Medical Support',
    deskripsi: 'Basic assessment and healthcare assistance for participants and staff.',
    ikon: 'bi-clipboard2-pulse'
  },
  {
    judul: 'First Aid',
    deskripsi: 'Immediate basic first-aid support for minor injuries and common medical incidents.',
    ikon: 'bi-bandaid'
  },
  {
    judul: 'Medical Assistance',
    deskripsi:
      'Initial medical assistance and coordination when further medical care is required.',
    ikon: 'bi-hospital'
  }
]

const faktor = [
  'Type of Event',
  'Number of Participants',
  'Event Location',
  'Event Duration',
  'Potential Medical Needs',
  'Available Healthcare Manpower'
]
</script>

<template>
  <PageHeader
    judul="Event Medical Support"
    :breadcrumb="[
      { label: 'Home', to: '/' },
      { label: 'Services' },
      { label: 'Event Medical Support' }
    ]"
  />
  <!-- tambahkan :gambar="bannerEvent" jika sudah ada gambar -->

  <section class="event-page">
    <!-- Pengantar -->
    <div class="container py-5">
      <div class="text-center mx-auto" style="max-width: 760px">
        <h6 class="event-label text-uppercase fw-bold">{{ info.label }}</h6>
        <h2 class="event-title fw-bold mb-3">{{ info.judul }}</h2>
        <p v-for="(p, i) in info.paragraf" :key="i" class="event-text mb-2">{{ p }}</p>
      </div>
    </div>

    <!-- Suitable For -->
    <div class="event-block event-block-alt py-5">
      <div class="container">
        <h3 class="event-heading fw-bold text-center mb-4">Suitable For</h3>
        <div class="row g-4 justify-content-center">
          <div v-for="item in cocok" :key="item.judul" class="col-12 col-sm-6 col-lg-4">
            <div class="event-card h-100">
              <i class="bi event-card-icon" :class="item.ikon"></i>
              <h5 class="event-card-title fw-bold">{{ item.judul }}</h5>
              <p class="event-text mb-0">{{ item.deskripsi }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Potential Services -->
    <div class="container py-5">
      <h3 class="event-heading fw-bold text-center mb-4">Potential Services</h3>
      <div class="row g-4">
        <div v-for="item in layanan" :key="item.judul" class="col-12 col-md-6">
          <div class="event-service h-100">
            <div class="event-icon flex-shrink-0">
              <i class="bi" :class="item.ikon"></i>
            </div>
            <div>
              <h5 class="event-card-title fw-bold mb-1">{{ item.judul }}</h5>
              <p class="event-text mb-0">{{ item.deskripsi }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tailored to Your Event -->
    <div class="event-block event-block-alt py-5">
      <div class="container">
        <div class="text-center mx-auto mb-4" style="max-width: 680px">
          <h3 class="event-heading fw-bold mb-2">Tailored to Your Event</h3>
          <p class="event-text mb-0">
            Every event has different risks and requirements. Our medical support can be planned
            based on:
          </p>
        </div>

        <div class="row g-3 justify-content-center">
          <div v-for="f in faktor" :key="f" class="col-12 col-sm-6 col-lg-4">
            <div class="event-faktor d-flex align-items-center gap-2">
              <i class="bi bi-check-circle event-check"></i>
              <span>{{ f }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Penutup -->
    <!-- <div class="event-cta text-center text-white">
      <div class="container py-5">
        <h3 class="fw-bold mb-3">Prepared for the Unexpected. Supported When It Matters.</h3>
        <p class="mx-auto mb-4" style="max-width: 680px">
          INSAcare provides flexible medical support designed around your event — because every
          event deserves a thoughtful healthcare plan.
        </p>
        <a href="#" class="btn btn-light btn-lg rounded-pill px-5 fw-bold text-uppercase event-btn">
          Appointment
        </a>
      </div>
    </div> -->

  </section>
</template>

<style scoped>
.event-page {
  --hijau: #4a8c6f;
  --navy: #1f2547;
  --abu: #555b66;
}

.event-label {
  color: var(--hijau);
  letter-spacing: 0.5px;
}

.event-title {
  color: var(--navy);
  font-size: clamp(1.8rem, 4.5vw, 3rem);
}

.event-heading {
  color: var(--navy);
}

.event-text {
  color: var(--abu);
  line-height: 1.8;
}

.event-block-alt {
  background: #f3f8fb;
}

/* Kartu "Suitable For" */
.event-card {
  background: #fff;
  border: 2px solid #e3f2fd;
  border-radius: 14px;
  padding: 1.8rem 1.4rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.event-card:hover {
  transform: translateY(-5px);
  border-color: var(--hijau);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}

.event-card-icon {
  display: inline-block;
  font-size: 2.2rem;
  color: var(--hijau);
  margin-bottom: 0.8rem;
}

.event-card-title {
  color: var(--navy);
  margin-bottom: 0.5rem;
}

/* Kartu "Potential Services" (ikon kiri, teks kanan) */
.event-service {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border: 2px solid #e3f2fd;
  border-radius: 14px;
  background: #fff;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.event-service:hover {
  border-color: var(--hijau);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}

.event-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #dee2e6;
  border-radius: 14px;
  background: #fff;
  color: var(--hijau);
  font-size: 1.9rem;
}

/* Faktor */
.event-faktor {
  background: #fff;
  border-radius: 12px;
  padding: 0.9rem 1.1rem;
  color: var(--navy);
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  height: 100%;
}

.event-check {
  color: var(--hijau);
  font-size: 1.2rem;
}

/* Penutup */
.event-cta {
  background: var(--hijau);
}

.event-btn {
  color: var(--hijau);
}
</style>