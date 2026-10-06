<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { Modal } from 'bootstrap'

// --- Counter ---
const jumlah = ref(0)

// --- Form ---
const form = ref({ nama: '', email: '', pesan: '' })
const sudahKirim = ref(false)

const error = computed(() => ({
  nama: form.value.nama.trim() === '' ? 'Nama wajib diisi' : '',
  email: !/^\S+@\S+\.\S+$/.test(form.value.email) ? 'Email tidak valid' : '',
  pesan: form.value.pesan.trim().length < 10 ? 'Pesan minimal 10 karakter' : ''
}))

const formValid = computed(() => !Object.values(error.value).some(Boolean))

// --- Modal ---
const modalEl = ref(null)
let modal = null

onMounted(() => {
  modal = new Modal(modalEl.value)
})

onBeforeUnmount(() => {
  modal?.dispose()
})

function kirim() {
  sudahKirim.value = true
  if (!formValid.value) return
  modal.show()
}

function resetForm() {
  form.value = { nama: '', email: '', pesan: '' }
  sudahKirim.value = false
  modal.hide()
}
</script>

<template>
  <div class="mx-auto" style="max-width: 600px">
    <h1 class="text-center mb-2">Tentang Kami</h1>
    <p class="text-center text-muted mb-4">Ini adalah halaman about.</p>

    <!-- Card: counter -->
    <div class="card mb-4 shadow-sm">
      <div class="card-header fw-semibold">Counter</div>
      <div class="card-body text-center">
        <p class="display-6 mb-3">{{ jumlah }}</p>
        <div class="d-flex gap-2 justify-content-center flex-wrap">
          <button class="btn btn-primary" @click="jumlah++">Tambah</button>
          <button class="btn btn-outline-secondary" @click="jumlah--" :disabled="jumlah === 0">
            Kurang
          </button>
          <button class="btn btn-danger" @click="jumlah = 0">Reset</button>
        </div>
      </div>
    </div>

    <!-- Card: form -->
    <div class="card shadow-sm">
      <div class="card-header fw-semibold">Hubungi Kami</div>
      <div class="card-body">
        <form @submit.prevent="kirim" novalidate>
          <div class="mb-3">
            <label for="nama" class="form-label">Nama</label>
            <input
              id="nama"
              v-model="form.nama"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': sudahKirim && error.nama }"
              placeholder="Nama lengkap"
            />
            <div class="invalid-feedback">{{ error.nama }}</div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': sudahKirim && error.email }"
              placeholder="nama@email.com"
            />
            <div class="invalid-feedback">{{ error.email }}</div>
          </div>

          <div class="mb-3">
            <label for="pesan" class="form-label">Pesan</label>
            <textarea
              id="pesan"
              v-model="form.pesan"
              rows="4"
              class="form-control"
              :class="{ 'is-invalid': sudahKirim && error.pesan }"
              placeholder="Tulis pesan Anda"
            ></textarea>
            <div class="invalid-feedback">{{ error.pesan }}</div>
          </div>

          <button type="submit" class="btn btn-primary w-100">Kirim</button>
        </form>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" tabindex="-1" ref="modalEl">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Pesan Terkirim</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p class="mb-1">Terima kasih, <strong>{{ form.nama }}</strong>!</p>
            <p class="mb-0 text-muted">Kami akan membalas ke {{ form.email }}.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              Tutup
            </button>
            <button type="button" class="btn btn-primary" @click="resetForm">
              Kirim Lagi
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>