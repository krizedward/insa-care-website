<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuBuka = ref(false)
const dropdownBuka = ref(false)
const dropdownEl = ref(null)

// Tutup menu & dropdown setiap pindah halaman
watch(
  () => route.fullPath,
  () => {
    menuBuka.value = false
    dropdownBuka.value = false
  }
)

// Tutup dropdown saat klik di luar
function klikLuar(e) {
  if (dropdownEl.value && !dropdownEl.value.contains(e.target)) {
    dropdownBuka.value = false
  }
}
onMounted(() => document.addEventListener('click', klikLuar))
onBeforeUnmount(() => document.removeEventListener('click', klikLuar))
</script>

<template>
  <nav class="navbar navbar-expand-lg insa-navbar">
    <div class="container">
      <!-- Logo (sementara teks, ganti dengan <img> kalau sudah ada) -->
      <RouterLink class="navbar-brand brand" to="/">
        <img src="@/assets/images/logo.png" alt="INSAcare" class="brand-logo" />
      </RouterLink>

      <!-- Tombol hamburger -->
      <button class="navbar-toggler" type="button" @click="menuBuka = !menuBuka">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div class="collapse navbar-collapse" :class="{ show: menuBuka }">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About INSA</RouterLink>
          </li>

          <!-- Dropdown -->
          <li class="nav-item dropdown" ref="dropdownEl">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              @click.prevent="dropdownBuka = !dropdownBuka"
            >
              Services
            </a>
            <ul class="dropdown-menu" :class="{ show: dropdownBuka }">
              <li><RouterLink class="dropdown-item" to="/service/care-at-home">Care At Home</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/service/group-care">Group Care</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/service/event-medical-support">Event Medical Support</RouterLink></li>
            </ul>
          </li>

          <!-- <li class="nav-item">
            <RouterLink class="nav-link" to="/about">How It Works</RouterLink>
          </li> -->
          <li class="nav-item">
            <RouterLink class="nav-link" to="/frequently-asked-questions">FAQ</RouterLink>
          </li>

          <!-- Tombol -->
          <!-- <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
            <a href="#" class="btn btn-appointment">Appointment</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
/* ===== Dasar (desktop & mobile) ===== */
.insa-navbar {
  background: #fff;
  padding: 25px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1030;
}

.insa-navbar .nav-link {
  color: #4a8c6f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.95rem;
  padding-inline: 1rem;
}

.insa-navbar .nav-link:hover,
.insa-navbar .nav-link.router-link-exact-active,
.insa-navbar .nav-link.show {
  color: #3b7359;
}

.insa-navbar .dropdown-menu {
  border: 0;
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.insa-navbar .dropdown-item {
  color: #4a8c6f;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  border-radius: 8px;
}

.insa-navbar .dropdown-item:hover {
  background: #eaf4ef;
  color: #3b7359;
}

.btn-appointment {
  background: #4a8c6f;
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

/* ===== Mobile: tinggi mengikuti isi ===== */
@media (max-width: 991.98px) {
  .insa-navbar {
    padding: 12px 0;
  }

  .insa-navbar .navbar-collapse {
    background: #fff;
    margin-top: 0.75rem;
    padding: 1rem 0;
    border-top: 1px solid #eef0f2;
  }

  .insa-navbar .nav-link {
    padding: 0.6rem 0;
  }

  .insa-navbar .dropdown-menu {
    box-shadow: none;
    padding-left: 0.5rem;
  }

  .btn-appointment {
    display: block;
    width: 100%;
    text-align: center;
  }
}

/* ===== Desktop: tinggi 100px ===== */
@media (min-width: 992px) {
  .insa-navbar {
    height: 100px;
  }
}
</style>