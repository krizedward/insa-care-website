<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'danger', 'outline'].includes(v)
  },
  ukuran: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  disabled: { type: Boolean, default: false },
  block: { type: Boolean, default: false }
})

const kelas = computed(() => [
  'btn',
  `btn-${props.variant}`,
  { 'btn-sm': props.ukuran === 'sm' },
  { 'btn-lg': props.ukuran === 'lg' },
  { 'btn-block': props.block }
])
</script>

<template>
  <button :class="kelas" :disabled="disabled">
    <slot>Tombol</slot>
  </button>
</template>

<!-- Tombol.vue 
- props mengatur tampilan tombol dari luar (variant, ukuran, dll).
- computed merangkai nama class sesuai props.
- <slot> membuat teks tombol bisa diisi bebas, dengan teks default "Tombol".
- Event @click otomatis diteruskan ke elemen <button>, jadi tidak perlu defineEmits. 
-->