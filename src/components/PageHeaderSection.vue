<script setup>
defineProps({
  judul: { type: String, required: true },
  // Daftar breadcrumb: [{ label: 'Home', to: '/' }, { label: 'About Us' }]
  breadcrumb: { type: Array, default: () => [] },
  gambar: { type: String, default: '' }
})
</script>

<template>
  <section
    class="page-header d-flex align-items-center justify-content-center text-center text-white"
    :style="gambar ? { backgroundImage: `url(${gambar})` } : {}"
  >
    <div class="page-header-overlay"></div>

    <div class="container position-relative">
      <h1 class="page-header-title fw-bold mb-3">{{ judul }}</h1>

      <nav v-if="breadcrumb.length" aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center mb-0">
          <li
            v-for="(item, i) in breadcrumb"
            :key="item.label"
            class="breadcrumb-item"
            :class="{ active: i === breadcrumb.length - 1 }"
          >
            <RouterLink v-if="item.to && i !== breadcrumb.length - 1" :to="item.to">
              {{ item.label }}
            </RouterLink>
            <span v-else>{{ item.label }}</span>
          </li>
        </ol>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.page-header {
  position: relative;
  min-height: 180px;
  background-color: #1B2D6B;
  background-size: cover;
  background-position: center;
}

.page-header-overlay {
  position: absolute;
  inset: 0;
  background: rgba(31, 37, 71, 0.6);
}

.page-header-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
}

/* Breadcrumb putih dengan pemisah ">" */
.breadcrumb {
  --bs-breadcrumb-divider: '>';
  --bs-breadcrumb-divider-color: rgba(255, 255, 255, 0.7);
  --bs-breadcrumb-item-active-color: #fff;
  font-size: 1.05rem;
}

.breadcrumb a {
  color: #fff;
  text-decoration: none;
}

.breadcrumb a:hover {
  color: #7fc4a0;
}
</style>