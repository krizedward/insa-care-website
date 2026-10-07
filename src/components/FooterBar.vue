<script setup>
const tahun = new Date().getFullYear()

const menu = [
  { label: 'Home', to: '/' },
  { label: 'About INSA', to: '/about' },
  { label: 'How It Works', to: '/about' },
  { label: 'FAQ', to: '/about' }
]

const layanan = ['Care At Home', 'Group Care', 'Event Medical Support']

const kontak = [
  { ikon: 'bi-geo-alt-fill', teks: 'Jl. Contoh No. 123, Malang, Jawa Timur' },
  { ikon: 'bi-telephone-fill', teks: '+62 812-3456-7890' },
  { ikon: 'bi-envelope-fill', teks: 'info@insacare.com' }
]

const sosmed = [
  { ikon: 'bi-instagram', url: '#' },
  { ikon: 'bi-facebook', url: '#' },
  { ikon: 'bi-whatsapp', url: '#' },
  { ikon: 'bi-youtube', url: '#' }
]
</script>

<template>
  <footer class="insa-footer">
    <div class="container py-5">
      <div class="row g-4">
        <!-- Brand -->
        <div class="col-12 col-md-6 col-lg-4">
          <h4 class="fw-bold mb-3">
            <span class="text-white">INSA</span><span class="brand-care">care</span>
          </h4>
          <p class="footer-text">
            Layanan kesehatan profesional langsung di rumah Anda. Dokter, perawat, bidan, dan
            fisioterapi siap membantu setiap generasi.
          </p>
          <div class="d-flex gap-2 mt-3">
            <a
              v-for="s in sosmed"
              :key="s.ikon"
              :href="s.url"
              class="social-btn"
              target="_blank"
              rel="noopener"
            >
              <i class="bi" :class="s.ikon"></i>
            </a>
          </div>
        </div>

        <!-- Menu -->
        <div class="col-6 col-md-3 col-lg-2">
          <h6 class="footer-heading">Menu</h6>
          <ul class="list-unstyled mb-0">
            <li v-for="m in menu" :key="m.label" class="mb-2">
              <RouterLink :to="m.to" class="footer-link">{{ m.label }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Layanan -->
        <div class="col-6 col-md-3 col-lg-3">
          <h6 class="footer-heading">Services</h6>
          <ul class="list-unstyled mb-0">
            <li v-for="l in layanan" :key="l" class="mb-2">
              <a href="#" class="footer-link">{{ l }}</a>
            </li>
          </ul>
        </div>

        <!-- Kontak -->
        <div class="col-12 col-md-6 col-lg-3">
          <h6 class="footer-heading">Contact</h6>
          <ul class="list-unstyled mb-0">
            <li v-for="k in kontak" :key="k.teks" class="d-flex gap-2 mb-2 footer-text">
              <i class="bi" :class="k.ikon"></i>
              <span>{{ k.teks }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <div class="container py-3 text-center">
        &copy; {{ tahun }} INSA Care Healthcare Services. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style>
.insa-footer {
  background: #1f2547;
  color: #cfd3e6;
  margin-top: 4rem;
}

.insa-footer .brand-care {
  color: #7fc4a0;
}

.insa-footer .footer-text {
  color: #cfd3e6;
  font-size: 0.95rem;
  line-height: 1.8;
}

.insa-footer .footer-text i {
  color: #7fc4a0;
  margin-top: 0.25rem;
}

.insa-footer .footer-heading {
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1.2rem;
}

.insa-footer .footer-link {
  color: #cfd3e6;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s, padding-left 0.2s;
}

.insa-footer .footer-link:hover {
  color: #7fc4a0;
  padding-left: 4px;
}

.insa-footer .social-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.insa-footer .social-btn:hover {
  background: #4a8c6f;
  transform: translateY(-3px);
}

.insa-footer .footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.9rem;
  color: #9aa0bd;
}
</style>