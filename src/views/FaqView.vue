<script setup>
import { ref, computed } from 'vue'
import PageHeader from '../components/PageHeaderSection.vue'
// import bannerFaq from '../assets/banner-faq.jpg'

const nomorWA = '62812xxxxxxx'
const linkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(
  'Halo INSAcare, saya ingin bertanya tentang layanan kesehatan.'
)}`

// CATATAN: isi FAQ di bawah hanya CONTOH. Ganti dengan jawaban asli dari INSAcare.
const kategori = ['Semua', 'Umum', 'Care At Home', 'Group Care', 'Event Medical']

const faq = [
  {
    kategori: 'Umum',
    tanya: 'Apa itu INSAcare?',
    jawab:
      'INSAcare adalah layanan kesehatan profesional yang dapat dilakukan langsung di rumah, sekolah, kantor, maupun acara tertentu.'
  },
  {
    kategori: 'Umum',
    tanya: 'Bagaimana cara membuat janji?',
    jawab:
      'Anda dapat menekan tombol Appointment atau menghubungi kami lewat WhatsApp. Tim kami akan membantu menyesuaikan layanan dengan kebutuhan Anda.'
  },
  {
    kategori: 'Umum',
    tanya: 'Apakah layanan tersedia di semua area?',
    jawab:
      'Cakupan area layanan dapat berbeda. Silakan hubungi kami untuk memastikan layanan tersedia di lokasi Anda.'
  },
  {
    kategori: 'Care At Home',
    tanya: 'Layanan apa saja yang bisa dilakukan di rumah?',
    jawab:
      'Kunjungan dokter, perawatan dan tindakan medis dasar oleh perawat, layanan bidan, fisioterapi, vaksinasi, serta layanan kesehatan dasar.'
  },
  {
    kategori: 'Care At Home',
    tanya: 'Siapa yang melakukan perawatan di rumah?',
    jawab:
      'Layanan diberikan oleh tenaga kesehatan profesional sesuai kebutuhan, seperti dokter, perawat, bidan, atau fisioterapis.'
  },
  {
    kategori: 'Group Care',
    tanya: 'Apakah INSAcare melayani perusahaan dan sekolah?',
    jawab:
      'Ya. Group Care mencakup vaksinasi, skrining kesehatan dasar, edukasi kesehatan, dan layanan tertentu langsung di lokasi perusahaan atau sekolah.'
  },
  {
    kategori: 'Group Care',
    tanya: 'Apakah program dapat disesuaikan dengan jumlah peserta?',
    jawab:
      'Program disusun sesuai kebutuhan dan jumlah peserta. Hubungi kami untuk mendiskusikan kebutuhan organisasi Anda.'
  },
  {
    kategori: 'Event Medical',
    tanya: 'Event seperti apa yang bisa didukung?',
    jawab:
      'Turnamen olahraga, acara sekolah, acara perusahaan, pameran, acara publik, dan kegiatan komunitas.'
  },
  {
    kategori: 'Event Medical',
    tanya: 'Apa yang menentukan rencana dukungan medis untuk event?',
    jawab:
      'Jenis acara, jumlah peserta, lokasi, durasi, potensi kebutuhan medis, dan tenaga kesehatan yang tersedia.'
  }
]

const aktif = ref('Semua')
const terbuka = ref(0) // indeks FAQ yang terbuka, null = semua tertutup

const tampil = computed(() =>
  aktif.value === 'Semua' ? faq : faq.filter((f) => f.kategori === aktif.value)
)

function pilihKategori(k) {
  aktif.value = k
  terbuka.value = null
}

function toggle(i) {
  terbuka.value = terbuka.value === i ? null : i
}
</script>

<template>
  <PageHeader
    judul="FAQ"
    :breadcrumb="[{ label: 'Home', to: '/' }, { label: 'FAQ' }]"
  />
  <!-- tambahkan :gambar="bannerFaq" jika sudah ada gambar -->

  <section class="faq-page">
    <div class="container py-5">
      <!-- Pengantar -->
      <div class="text-center mx-auto mb-4" style="max-width: 720px">
        <h6 class="faq-label text-uppercase fw-bold">FAQ</h6>
        <h2 class="faq-title fw-bold mb-3">Frequently Asked Questions</h2>
        <p class="faq-text mb-0">
          Temukan jawaban atas pertanyaan yang sering diajukan seputar layanan INSAcare.
        </p>
      </div>

      <!-- Filter kategori -->
      <div class="d-flex flex-wrap justify-content-center gap-2 mb-4">
        <button
          v-for="k in kategori"
          :key="k"
          type="button"
          class="faq-chip"
          :class="{ active: aktif === k }"
          @click="pilihKategori(k)"
        >
          {{ k }}
        </button>
      </div>

      <!-- Accordion -->
      <div class="row justify-content-center">
        <div class="col-12 col-lg-9">
          <div
            v-for="(item, i) in tampil"
            :key="item.tanya"
            class="faq-item"
            :class="{ open: terbuka === i }"
          >
            <button
              type="button"
              class="faq-question"
              :aria-expanded="terbuka === i"
              @click="toggle(i)"
            >
              <span>{{ item.tanya }}</span>
              <i class="bi bi-chevron-down faq-arrow"></i>
            </button>

            <div class="faq-answer">
              <div class="faq-answer-inner">
                <p class="faq-text mb-0">{{ item.jawab }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <!-- <div class="faq-cta text-center text-white">
      <div class="container py-5">
        <h3 class="fw-bold mb-2">Masih ada pertanyaan?</h3>
        <p class="mb-4">Tim kami siap membantu Anda.</p>
        <a
          :href="linkWA"
          target="_blank"
          rel="noopener"
          class="btn btn-light btn-lg rounded-pill px-5 fw-bold text-uppercase faq-btn"
        >
          <i class="bi bi-whatsapp me-2"></i>Hubungi Kami
        </a>
      </div>
    </div> -->
  </section>
</template>

<style scoped>
.faq-page {
  --hijau: #4a8c6f;
  --navy: #1f2547;
  --abu: #555b66;
}

.faq-label {
  color: var(--hijau);
  letter-spacing: 0.5px;
}

.faq-title {
  color: var(--navy);
  font-size: clamp(1.8rem, 4.5vw, 3rem);
}

.faq-text {
  color: var(--abu);
  line-height: 1.8;
}

/* Filter */
.faq-chip {
  border: 2px solid #e3f2fd;
  background: #fff;
  color: var(--navy);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.45rem 1.1rem;
  border-radius: 50rem;
  transition: all 0.2s;
}

.faq-chip:hover {
  border-color: var(--hijau);
  color: var(--hijau);
}

.faq-chip.active {
  background: var(--hijau);
  border-color: var(--hijau);
  color: #fff;
}

/* Accordion */
.faq-item {
  background: #fff;
  border: 2px solid #e3f2fd;
  border-radius: 14px;
  margin-bottom: 0.9rem;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.faq-item.open {
  border-color: var(--hijau);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.3rem;
  background: transparent;
  border: 0;
  text-align: left;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--navy);
}

.faq-arrow {
  flex-shrink: 0;
  color: var(--hijau);
  transition: transform 0.25s;
}

.faq-item.open .faq-arrow {
  transform: rotate(180deg);
}

/* Animasi buka-tutup tanpa menghitung tinggi */
.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.25s ease;
}

.faq-item.open .faq-answer {
  grid-template-rows: 1fr;
}

.faq-answer-inner {
  overflow: hidden;
  padding: 0 1.3rem;
}

.faq-item.open .faq-answer-inner {
  padding-bottom: 1.2rem;
}

/* CTA */
.faq-cta {
  background: var(--hijau);
}

.faq-btn {
  color: var(--hijau);
}
</style>