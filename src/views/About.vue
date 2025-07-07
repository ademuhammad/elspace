<template>
  <div class="AboutPage font-[Poppins] bg-white text-gray-700">
    <BaseNavbar />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-indigo-50 to-white py-20 text-center px-6">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
        Learn with Flexibility, Grow Faster with <span class="text-blue-600">Elspace</span>
      </h1>
      <p class="text-lg max-w-2xl mx-auto text-gray-600">
        Platform belajar interaktif untuk semua usia — from playful kids to ambitious professionals.
      </p>
    </section>

    <!-- How it Works -->
    <section class="bg-white py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Cara Belajar di Elspace</h2>
        <div class="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <span class="text-blue-600 text-3xl mb-2 block">✔</span>
            <h3 class="text-xl font-semibold mb-2">Pilih Kelas Favorit</h3>
            <p class="text-gray-600">
              Telusuri topik menarik dari pemula hingga mahir. Bayar sekali, akses selamanya.
            </p>
          </div>
          <div>
            <span class="text-blue-600 text-3xl mb-2 block">✔</span>
            <h3 class="text-xl font-semibold mb-2">Belajar Mandiri</h3>
            <p class="text-gray-600">
              Tonton video interaktif, praktik langsung, dan ulangi materi kapan pun kamu butuh.
            </p>
          </div>
          <div>
            <span class="text-blue-600 text-3xl mb-2 block">✔</span>
            <h3 class="text-xl font-semibold mb-2">Tingkatkan Skill</h3>
            <p class="text-gray-600">
              Gunakan ilmu yang dipelajari untuk proyek nyata, bisnis, atau kariermu.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Subjects Overview -->
    <section class="bg-indigo-50 py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Explore Subjects</h2>
        <div class="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 class="text-lg font-semibold text-indigo-700">Matematika</h3>
            <p class="text-sm text-gray-600">Pelajari angka, logika, dan pemecahan masalah.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-indigo-700">Bahasa Inggris</h3>
            <p class="text-sm text-gray-600">Latih speaking, writing, dan grammar.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-indigo-700">Sains</h3>
            <p class="text-sm text-gray-600">Eksplorasi fenomena alam & eksperimen seru.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-indigo-700">Coding</h3>
            <p class="text-sm text-gray-600">Belajar membangun website & aplikasi dari dasar.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-white px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-800 mb-6">
          Why Choose <span class="text-blue-500">Elspace?</span>
        </h2>
        <p class="text-gray-600 text-lg mb-14">
          Kami bukan sekadar platform. Kami adalah mitra belajarmu — berkualitas, fleksibel, dan menyenangkan.
        </p>

        <div class="grid md:grid-cols-3 gap-8 text-left">
          <div class="bg-white p-6 shadow-lg rounded-xl">
            <h3 class="text-xl font-bold text-indigo-600 mb-2">Expert Mentors</h3>
            <p class="text-gray-600">
              Dipandu oleh pengajar profesional dan mentor dari berbagai industri.
            </p>
          </div>
          <div class="bg-white p-6 shadow-lg rounded-xl">
            <h3 class="text-xl font-bold text-indigo-600 mb-2">Hands-On Learning</h3>
            <p class="text-gray-600">
              Belajar lewat proyek nyata, quiz interaktif, dan simulasi dunia kerja.
            </p>
          </div>
          <div class="bg-white p-6 shadow-lg rounded-xl">
            <h3 class="text-xl font-bold text-indigo-600 mb-2">Flexible Schedule</h3>
            <p class="text-gray-600">
              Belajar kapan saja, dari mana saja. Akses materi 24/7 tanpa batas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimoni -->
    <section class="bg-indigo-50 py-20 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-10 text-gray-800">Apa Kata Mereka?</h2>
        <div class="grid md:grid-cols-3 gap-6 text-left">
          <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-gray-600 mb-4">
              “Elspace membantu saya belajar coding dengan cara yang mudah dipahami. Sekarang saya sudah membuat aplikasi pertama saya!”
            </p>
            <p class="font-semibold text-gray-800">Nadia, Pelajar SMA</p>
            <p class="text-sm text-gray-500">Indonesia</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-gray-600 mb-4">
              “Sebagai orang tua, saya senang anak saya belajar lewat Elspace. Materinya ramah anak dan progresnya terlihat.”
            </p>
            <p class="font-semibold text-gray-800">Pak Deni, Orang Tua Murid</p>
            <p class="text-sm text-gray-500">Bandung</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-gray-600 mb-4">
              “Saya ikut kursus digital marketing, dan hasilnya sangat terasa di usaha kecil saya. Terima kasih Elspace!”
            </p>
            <p class="font-semibold text-gray-800">Bayu, Wirausaha</p>
            <p class="text-sm text-gray-500">Jakarta</p>
          </div>
        </div>
      </div>
    </section>

    <BaseFooter />
  </div>
</template>

<script>
import BaseNavbar from "../components/BaseNavbar.vue";
import BaseFooter from "../components/BaseFooter.vue";

export default {
  name: "AboutPage",
  components: {
    BaseNavbar,
    BaseFooter,
  },
};
</script>
