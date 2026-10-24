<script setup>
const nilai = [
  {
    judul: 'Professional',
    deskripsi: 'Qualified healthcare professionals.',
    ikon: 'bi-patch-check'
  },
  {
    judul: 'Personal',
    deskripsi: 'Care that considers the person, not only the procedure.',
    ikon: 'bi-person-heart'
  },
  {
    judul: 'Convenient',
    deskripsi: 'Healthcare brought closer to where you are.',
    ikon: 'bi-house-heart'
  },
  {
    judul: 'Human',
    deskripsi: 'Professional care without losing the human connection.',
    ikon: 'bi-heart'
  }
]
</script>

<template>
  <section class="why-insa">
    <div class="container py-5">
      <!-- Judul -->
      <div class="text-center mx-auto mb-5" style="max-width: 720px">
        <h6 class="wi-label text-uppercase fw-bold">Why INSA</h6>
        <h2 class="wi-title fw-bold mb-3">Healthcare, Done the INSA Way</h2>
        <p class="wi-text mb-0">
          Four values guide how we care for every patient, family, and organization we serve.
        </p>
      </div>

      <!-- 4 nilai -->
      <div class="row g-4">
        <div v-for="(n, i) in nilai" :key="n.judul" class="col-12 col-sm-6 col-lg-3">
          <div class="wi-item h-100">
            <span class="wi-number">0{{ i + 1 }}</span>
            <div class="wi-icon">
              <i class="bi" :class="n.ikon"></i>
            </div>
            <h4 class="wi-name fw-bold">{{ n.judul }}</h4>
            <p class="wi-desc mb-0">{{ n.deskripsi }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-insa {
  --hijau: #4a8c6f;
  --navy: #1f2547;
  --abu: #555b66;
  background: #f3f8fb;
}

.wi-label {
  color: var(--hijau);
  letter-spacing: 0.5px;
}

.wi-title {
  color: var(--navy);
  font-size: clamp(1.8rem, 4.5vw, 3rem);
}

.wi-text {
  color: var(--abu);
  line-height: 1.8;
}

.wi-item {
  position: relative;
  overflow: hidden;
  background: #fff;
  border-radius: 16px;
  border-top: 5px solid var(--hijau);
  padding: 2rem 1.5rem 1.8rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.wi-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.1);
}

/* Nomor besar sebagai dekorasi latar */
.wi-number {
  position: absolute;
  top: 0.6rem;
  right: 1rem;
  font-size: 3.8rem;
  font-weight: 800;
  line-height: 1;
  color: #e3f2fd;
  user-select: none;
}

.wi-icon {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #eaf4ef;
  color: var(--hijau);
  font-size: 1.9rem;
  margin-bottom: 1.2rem;
}

.wi-name {
  position: relative;
  color: var(--navy);
  margin-bottom: 0.5rem;
}

.wi-desc {
  position: relative;
  color: var(--abu);
  line-height: 1.7;
}
</style>