<template>
  <div class="landing-page">
    <BaseNavbar />
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-indigo-50 to-white pt-20 pb-32 overflow-hidden"
    >
      <div
        class="max-w-3xl mx-auto px-6 flex flex-col items-center justify-center gap-8 text-center relative z-10"
      >
        <!-- Headline -->
        <div>
          <h1
            class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            Learn with
            <span class="text-blue-500 decoration-wavy decoration-2"
              >Flexibility</span
            ><br />
            Grow
            <span class="text-blue-500 decoration-wavy decoration-2"
              >Faster</span
            >
            with
            <span class="text-blue-500 decoration-wavy decoration-2"
              >Elspace</span
            >
          </h1>
          <p
            class="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-8"
          >
            Platform belajar interaktif untuk semua usia — from playful kids to
            ambitious professionals.
          </p>
        </div>

        <Swiper
          :modules="swiperModules"
          :autoplay="{ delay: 3000 }"
          :loop="true"
          class="w-full max-w-[1340px] h-[400px] rounded-2xl shadow-lg"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <img :src="image" class="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="#how-it-works"
            class="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition"
            >Get Started
          </a>
          <a
            href="#subjects"
            class="text-indigo-600 font-semibold border border-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50 transition"
            >Browse Courses</a
          >
        </div>
      </div>
    </section>

    <!-- How It Works - Timeline Style -->
    <section id="how-it-works" class="bg-white py-20 relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold text-gray-800 mb-4">
            Cara Belajar di
            <span class="text-blue-500 decoration-wavy decoration-2"
              >Elspace</span
            >
          </h2>
          <p class="text-gray-600 text-lg">
            Mulai dari mana pun kamu berada — jalani proses belajarnya dengan
            mudah dan menyenangkan.
          </p>
        </div>

        <!-- Vertical Timeline -->
        <div class="relative">
          <!-- Vertical Line -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"
          ></div>

          <!-- Step #1 -->
          <div class="mb-20 md:flex items-center">
            <div class="md:w-1/2 md:pr-10 text-right md:text-left">
              <div
                class="inline-flex items-center gap-3 mb-4 text-indigo-600 font-semibold"
              >
                <span
                  class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full"
                  >✔</span
                >
                Pilih Kelas Favorit
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">
                Pilih topik yang kamu sukai
              </h3>
              <p class="text-gray-600">
                Telusuri berbagai topik dan materi belajar. Mulai dari pemula
                hingga mahir. Bayar sekali, akses selamanya.
              </p>
            </div>
            <div class="md:w-1/2 mt-6 md:mt-0 text-center">
              <img
                src="/images/k.jpg"
                alt="Pilih Kelas"
                class="rounded-xl mx-auto w-80 h-auto shadow-md"
              />
            </div>
          </div>

          <!-- Step #2 -->
          <div class="mb-20 md:flex items-center flex-row-reverse">
            <div class="md:w-1/2 md:pl-10 text-left">
              <div
                class="inline-flex items-center gap-3 mb-4 text-indigo-600 font-semibold"
              >
                <span
                  class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full"
                  >✔</span
                >
                Belajar Mandiri
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">
                Tonton & Praktik
              </h3>
              <p class="text-gray-600">
                Nikmati video interaktif, praktik langsung, dan ulangi materi
                kapan pun kamu butuh.
              </p>
            </div>
            <div class="md:w-1/2 mt-6 md:mt-0 text-center">
              <img
                src="/images/professional.jpg"
                alt="Belajar Mandiri"
                class="rounded-xl mx-auto w-80 h-auto shadow-md"
              />
            </div>
          </div>

          <!-- Step #3 -->
          <div class="md:flex items-center">
            <div class="md:w-1/2 md:pr-10 text-right md:text-left">
              <div
                class="inline-flex items-center gap-3 mb-4 text-indigo-600 font-semibold"
              >
                <span
                  class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full"
                  >✔</span
                >
                Tingkatkan Skill
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">
                Gunakan Ilmu untuk Berkarya
              </h3>
              <p class="text-gray-600">
                Terapkan skill yang kamu pelajari untuk proyek nyata, bisnis,
                atau pengembangan karier.
              </p>
            </div>
            <div class="md:w-1/2 mt-6 md:mt-0 text-center">
              <img
                src="/images/2.jpg"
                alt="Tingkatkan Skill"
                class="rounded-xl mx-auto w-80 h-auto shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner - Left Text, Right Illustration -->
    <section class="relative bg-indigo-600 text-white py-20 overflow-hidden">
      <!-- Decorative Bubbles -->
      <div
        class="absolute top-0 left-0 w-64 h-64 bg-indigo-400 opacity-30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      ></div>

      <!-- SVG Pattern or Wave -->
      <div class="absolute inset-0 opacity-10">
        <svg
          class="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L120,90.7C240,117,480,171,720,165.3C960,160,1200,96,1320,64L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            fill="white"
            fill-opacity="0.1"
          ></path>
        </svg>
      </div>

      <div
        class="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <!-- Left: Text Content -->
        <div class="md:w-1/2 text-left">
          <img
            src="/images/elspace4.svg"
            alt="Elspace Logo"
            class="w-40 md:w-80 mb-6"
          />
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Mulai Belajar Hari Ini di
            <span class="text-blue-300 decoration-wavy decoration-2"
              >Elspace</span
            >
          </h2>
          <p class="mb-8 text-lg md:text-xl max-w-xl">
            Bayar sekali per kelas, belajar sepuasnya. Tanpa langganan, tanpa
            komitmen panjang. Semua materi di satu tempat.
          </p>
          <a
            href="/register"
            class="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-indigo-100 transition"
          >
            Gabung Sekarang
          </a>
        </div>

        <!-- Right: Illustration -->
        <div class="md:w-1/2">
          <img
            src="/images/undraw_vibe-coding_mjme.svg"
            alt="Belajar Online"
            class="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>

    <!-- Subjects Section -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-extrabold text-gray-800 mb-4">
          Explore Subjects
        </h2>
        <p class="text-gray-600 mb-12 text-lg">
          Temukan pelajaran favoritmu dan mulai belajar dengan cara yang
          menyenangkan —
          <span class="text-purple-700 font-medium"
            >dari dasar hingga mahir</span
          >.
        </p>

        <!-- Grid Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <!-- Card Item -->
          <div
            class="border rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <img
              src="images/math.jpg"
              alt="Matematika"
              class="rounded-xl mb-4 h-44 w-full object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-800">Matematika</h3>
            <p class="text-sm text-gray-500 mt-2">
              Pelajari angka, logika, dan pemecahan masalah secara interaktif.
            </p>
          </div>

          <div
            class="border rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <img
              src="images/eng2.jpg"
              alt="Bahasa Inggris"
              class="rounded-xl mb-4 h-44 w-full object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-800">Bahasa Inggris</h3>
            <p class="text-sm text-gray-500 mt-2">
              Latih kemampuan berbicara, menulis, dan memahami grammar.
            </p>
          </div>

          <div
            class="border rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <img
              src="images/physics.jpg"
              alt="Sains"
              class="rounded-xl mb-4 h-44 w-full object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-800">Sains</h3>
            <p class="text-sm text-gray-500 mt-2">
              Eksplorasi fenomena alam dan eksperimen menyenangkan di rumah.
            </p>
          </div>

          <div
            class="border rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <img
              src="images/3.jpg"
              alt="Coding"
              class="rounded-xl mb-4 h-44 w-full object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-800">Coding</h3>
            <p class="text-sm text-gray-500 mt-2">
              Mulai dari dasar hingga membangun aplikasi dan website sendiri.
            </p>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="mt-12">
          <a
            href="course.html"
            class="inline-block text-purple-700 font-semibold border border-purple-700 px-6 py-3 rounded-full hover:bg-purple-50 transition"
          >
            Browse More Subjects
          </a>
        </div>
      </div>
    </section>

    <!-- Trending Classes Section -->
    <!-- <section
      class="bg-gradient-to-br from-indigo-50 to-white py-20 relative overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-gray-800 mb-4">
            Trending Classes
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Kelas paling dicari minggu ini —
            <span class="text-indigo-600 font-medium"
              >relevan, seru, dan praktis!</span
            >
          </p>
        </div> -->

    <!-- Scrollable Card Container -->
    <!-- <div class="flex gap-6 overflow-x-auto pb-4 px-2 hide-scrollbar">
          <div
            v-for="(course, index) in trendingCourses"
            :key="index"
            class="min-w-[280px] flex-shrink-0 bg-white rounded-3xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition duration-300 border border-transparent hover:border-indigo-500"
          >
            <img
              :src="course.image"
              :alt="course.title"
              class="rounded-t-3xl h-44 w-full object-cover"
            />
            <div class="p-5">
              <span
                v-if="course.badge"
                class="text-xs font-medium bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full mb-2 inline-block"
              >
                {{ course.badge }}
              </span>
              <h3 class="text-lg font-bold text-gray-800 mb-1 line-clamp-1">
                {{ course.title }}
              </h3>
              <p class="text-sm text-gray-600 mb-4 line-clamp-2">
                {{ course.desc }}
              </p>
              <div class="text-sm text-gray-500 flex justify-between">
                <span
                  ><i class="fas fa-user mr-1"></i>
                  {{ course.students }} Siswa</span
                >
                <span
                  ><i class="fas fa-clock mr-1"></i> {{ course.duration }}</span
                >
              </div>
            </div>
          </div>
        </div> -->

    <!-- Why Choose Us -->
    <section class="bg-gradient-to-br from-indigo-50 to-white py-20">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-5xl font-extrabold text-gray-800 mb-6">
          Why Choose
          <span class="text-blue-500 decoration-wavy decoration-2"
            >Elspace?</span
          >
        </h2>
        <p class="text-gray-600 text-xl mb-14 max-w-2xl mx-auto">
          We're not just a platform. We are your learning partner, berkomitmen
          memberikan pengalaman belajar terbaik.
          <span class="font-semibold text-blue-500"
            >Berkualitas, fleksibel, dan menyenangkan</span
          >.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Card 1 -->
          <div
            class="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300"
          >
            <div
              class="absolute top-4 right-4 bg-blue-100 text-blue-500 p-3 rounded-full"
            >
              <i class="fas fa-chalkboard-teacher text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-12">
              Expert Mentors
            </h3>
            <p class="text-gray-600 text-base mb-6">
              Dipandu oleh pengajar profesional dan mentor berpengalaman dari
              berbagai industri.
            </p>
            <img
              src="/images/b.jpg"
              alt="Expert Mentors"
              class="rounded-2xl h-52 w-full object-cover"
            />
          </div>

          <!-- Card 2 (Highlighted) -->
          <div
            class="relative bg-indigo-600 text-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div
              class="absolute top-4 right-4 bg-white text-indigo-600 p-3 rounded-full"
            >
              <i class="fas fa-laptop-code text-2xl"></i>
            </div>
            <img
              src="/images/e.jpg"
              alt="Hands-On Learning"
              class="rounded-2xl h-52 w-full object-cover mb-6"
            />
            <h3 class="text-2xl font-bold mb-4 mt-4">Hands-On Learning</h3>
            <p class="text-base">
              Belajar dengan proyek nyata, quiz interaktif, dan simulasi dunia
              kerja.
            </p>
          </div>

          <!-- Card 3 -->
          <div
            class="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300"
          >
            <div
              class="absolute top-4 right-4 bg-blue-100 text-blue-500 p-3 rounded-full"
            >
              <i class="fas fa-clock text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-12">
              Flexible Schedule
            </h3>
            <p class="text-gray-600 text-base mb-6">
              Materi bisa kamu akses 24/7 dari device mana pun. Atur jadwal
              belajarmu sendiri, sesuai ritme dan gaya hidupmu.
            </p>
            <img
              src="/images/k.jpg"
              alt="Flexible Schedule"
              class="rounded-2xl h-52 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-gradient-to-br from-indigo-50 to-white py-20">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-5xl font-extrabold text-gray-800 mb-4">
          What Our
          <span class="text-blue-500 decoration-wavy decoration-2"
            >Learners</span
          >
          Say
        </h2>
        <p class="text-gray-600 text-xl mb-14">
          Suara dari mereka yang telah merasakan manfaat
          <span class="font-medium text-blue-500">Elspace</span>
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <!-- Testimonial Card 1 -->
          <div
            class="bg-white border border-blue-100 p-8 rounded-3xl shadow-md hover:shadow-lg transition duration-300 relative"
          >
            <i
              class="fas fa-quote-left text-blue-500 text-2xl absolute top-6 left-6"
            ></i>
            <p class="text-gray-700 text-base mt-6 mb-6">
              “Elspace membantu saya belajar coding dengan cara yang mudah
              dipahami. Sekarang saya sudah membuat aplikasi pertama saya!”
            </p>
            <div class="flex items-center space-x-4 mt-auto">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user"
                class="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h4 class="text-md font-bold text-gray-800">
                  Nadia, Pelajar SMA
                </h4>
                <span class="text-sm text-gray-500">Indonesia</span>
              </div>
            </div>
          </div>

          <!-- Testimonial Card 2 -->
          <div
            class="bg-white border border-blue-100 p-8 rounded-3xl shadow-md hover:shadow-lg transition duration-300 relative"
          >
            <i
              class="fas fa-quote-left text-blue-500 text-2xl absolute top-6 left-6"
            ></i>
            <p class="text-gray-700 text-base mt-6 mb-6">
              “Sebagai orang tua, saya senang anak saya belajar lewat Elspace.
              Materinya ramah anak dan progresnya terlihat.”
            </p>
            <div class="flex items-center space-x-4 mt-auto">
              <img
                src="https://randomuser.me/api/portraits/men/46.jpg"
                alt="user"
                class="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h4 class="text-md font-bold text-gray-800">
                  Pak Deni, Orang Tua Murid
                </h4>
                <span class="text-sm text-gray-500">Bandung</span>
              </div>
            </div>
          </div>

          <!-- Testimonial Card 3 -->
          <div
            class="bg-white border border-blue-100 p-8 rounded-3xl shadow-md hover:shadow-lg transition duration-300 relative"
          >
            <i
              class="fas fa-quote-left text-blue-500 text-2xl absolute top-6 left-6"
            ></i>
            <p class="text-gray-700 text-base mt-6 mb-6">
              “Saya ikut kursus digital marketing, dan hasilnya sangat terasa di
              usaha kecil saya. Terima kasih Elspace!”
            </p>
            <div class="flex items-center space-x-4 mt-auto">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user"
                class="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h4 class="text-md font-bold text-gray-800">Bayu, Wirausaha</h4>
                <span class="text-sm text-gray-500">Jakarta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <BaseFooter />
  </div>
</template><script>
import BaseNavbar from "../components/BaseNavbar.vue";
import BaseFooter from "../components/BaseFooter.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules"; // ✔️ Import yang benar untuk Swiper v10+
import "swiper/css";
import "swiper/css/autoplay";

export default {
  name: "LandingPage",
  components: {
    BaseNavbar,
    BaseFooter,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: ["/images/4.png", "/images/3.jpg", "/images/2.jpg"],
      trendingCourses: [
        {
          title: "Belajar HTML & CSS Dasar",
          desc: "Pelajari dasar-dasar membuat website dengan HTML & CSS secara praktis.",
          image: "/images/1.png",
          students: 250,
          duration: "10 Jam",
          badge: "Best Seller",
        },
        {
          title: "Dasar-dasar Python",
          desc: "Mulai perjalananmu dengan bahasa pemrograman Python yang powerful.",
          image: "/images/2.jpg",
          students: 320,
          duration: "8 Jam",
          badge: "New",
        },
        {
          title: "UI/UX Design untuk Pemula",
          desc: "Kenali prinsip dasar desain antarmuka dan pengalaman pengguna.",
          image: "/images/3.jpg",
          students: 180,
          duration: "6 Jam",
          badge: "Hot",
        },
        {
          title: "Excel untuk Analisis Data",
          desc: "Pelajari cara mengolah dan menganalisis data menggunakan Excel.",
          image: "/images/4.png",
          students: 210,
          duration: "7 Jam",
          badge: "Top Rated",
        },
      ],
    };
  },
  computed: {
    swiperModules() {
      return [Autoplay];
    },
  },
};
</script>



<style scoped>
/* Optional: Hide scrollbar in horizontal scroll */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.landing-page {
  font-family: sans-serif;
  text-align: center;
}
</style>
