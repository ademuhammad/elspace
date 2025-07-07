<template>
  <div class="about-page font-[Poppins] bg-white text-gray-800">
    <BaseNavbar />

    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-indigo-50 to-white pt-20 pb-32 px-6 text-center"
    >
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Tentang
          <span class="text-indigo-600 decoration-wavy decoration-2"
            >Elspace</span
          >
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Belajar fleksibel, interaktif, dan menyenangkan — untuk siapa saja, di
          mana saja.
        </p>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h2 class="text-3xl font-extrabold text-gray-800">
            Membuka Akses Belajar Untuk Semua
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Elspace lahir dengan visi sederhana: membuat belajar jadi mudah
            diakses, relevan, dan seru untuk semua kalangan — dari anak-anak
            yang suka bereksperimen, pelajar yang haus ilmu, hingga profesional
            yang ingin meng-upgrade skill.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Kami menyediakan kursus berkualitas, mentor berpengalaman, dan
            metode belajar praktis yang bisa kamu nikmati di mana saja dan kapan
            saja.
          </p>
        </div>
        <div class="text-center">
          <img
            src="/images/k.jpg"
            alt="About Elspace"
            class="w-full max-w-md mx-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="bg-indigo-50 py-20 px-6">
      <div class="max-w-6xl mx-auto text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Misi Kami
        </h2>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Kami percaya belajar adalah perjalanan yang harusnya fleksibel,
          berkualitas, dan berdampak nyata.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-3 text-indigo-700">
            Akses Terbuka
          </h3>
          <p class="text-gray-600">
            Kursus untuk semua level — dari pemula hingga mahir. Bayar sekali,
            akses materi selamanya.
          </p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-3 text-indigo-700">
            Belajar Praktis
          </h3>
          <p class="text-gray-600">
            Materi dirancang aplikatif, interaktif, dan mendukung praktik
            langsung.
          </p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-3 text-indigo-700">
            Tumbuh Bersama
          </h3>
          <p class="text-gray-600">
            Ditemani mentor berpengalaman. Terapkan skill untuk proyek nyata,
            bisnis, dan kariermu.
          </p>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <section class="py-20 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6">
          Mulai Perjalanan Belajarmu Sekarang
        </h2>
        <p class="text-gray-600 mb-8">
          Gabung bersama ribuan pelajar, orang tua, dan profesional yang sudah
          membuktikan manfaat belajar di Elspace.
        </p>
        <a
          href="/register"
          class="inline-block bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-indigo-700 transition"
        >
          Gabung Sekarang
        </a>
      </div>
    </section>
  </div>
  
    <BaseFooter />
</template>

<script setup>
// Import BaseNavbar jika belum di-global-kan
</script>

<style scoped></style>

<script>
import BaseNavbar from "../components/BaseNavbar.vue";
import BaseFooter from "../components/BaseFooter.vue";

export default {
  name: "LandingPage",
  components: {
    BaseNavbar,
    BaseFooter,
  },
};
</script>


