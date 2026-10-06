<script setup>
const judul = "Selamat Datang"
</script>

<!-- <template>
  <div class="home">
    <h1>{{ judul }}</h1>
    <p>Ini adalah halaman utama.</p>
  </div>
</template> -->

<template>
  <div class="text-center">
    <h1 class="display-5 fw-bold">Selamat Datang</h1>
    <p class="lead">Ini halaman utama dengan Bootstrap.</p>

    <button class="btn btn-primary me-2">Primary</button>
    <!-- <button class="btn btn-outline-danger">Danger</button> -->
    <button class="btn btn-danger">Danger</button>

    <div class="row mt-4">
      <div class="col-md-4" v-for="n in 3" :key="n">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">Card {{ n }}</h5>
            <p class="card-text"><i class="bi bi-house"></i> Contoh card Bootstrap.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
</style>