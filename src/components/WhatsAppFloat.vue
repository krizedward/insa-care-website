<script setup>
// Format nomor: kode negara tanpa "+" dan tanpa 0 di depan (0812... jadi 62812...)
const nomor = '62812xxxxxxx'
const pesan = 'Halo INSAcare, saya ingin bertanya tentang layanan kesehatan.'

const link = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`
</script>

<template>
  <a
    :href="link"
    class="wa-float"
    target="_blank"
    rel="noopener"
    aria-label="Hubungi kami lewat WhatsApp"
  >
    <span class="wa-label">Chat dengan kami</span>
    <span class="wa-icon">
      <i class="bi bi-whatsapp"></i>
    </span>
  </a>
</template>

<style>
.wa-float {
  position: fixed;
  right: 32px;
  bottom: calc(32px + env(safe-area-inset-bottom, 0px));
  z-index: 1040;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.wa-float .wa-icon {
  position: relative;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  font-size: 2.3rem;
  box-shadow: 0 8px 22px rgba(37, 211, 102, 0.45);
  transition: transform 0.2s, background 0.2s;
}


/* Efek denyut */
.wa-float .wa-icon::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #25d366;
  z-index: -1;
  animation: wa-pulse 2s infinite;
}

@keyframes wa-pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}

.wa-float:hover .wa-icon {
  transform: scale(1.08);
  background: #1ebe5b;
}

/* Label muncul saat hover (desktop) */
.wa-float .wa-label {
  background: #fff;
  color: #1f2547;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.6rem 1.1rem;
  border-radius: 50rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  opacity: 0;
  transform: translateX(10px);
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
}

.wa-float:hover .wa-label {
  opacity: 1;
  transform: translateX(0);
}

/* Mobile: lebih kecil, label disembunyikan */
@media (max-width: 575.98px) {
  .wa-float {
    right: 20px;
    bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  }

  .wa-float .wa-icon {
    width: 62px;
    height: 62px;
    font-size: 2rem;
  }

  .wa-float .wa-label {
    display: none;
  }
}

/* Hormati pengguna yang mematikan animasi */
@media (prefers-reduced-motion: reduce) {
  .wa-float .wa-icon::before {
    animation: none;
  }
}
</style>