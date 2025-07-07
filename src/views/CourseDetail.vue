<template>
  <BaseNavbar />

  <div class="bg-gray-50 min-h-screen py-12 px-4">
    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      <!-- Kiri: Info Kursus -->
      <div class="md:col-span-2 bg-white p-6 md:p-10 rounded-2xl shadow-xl">
        <!-- Judul & Meta -->
        <div class="text-center mb-8">
          <p
            class="text-base font-medium text-gray-600 mb-1 uppercase tracking-wide"
          >
            Online Course : {{ course.category?.name ?? "-" }}
          </p>

          <h2
            class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            {{ course.name }}
          </h2>

          <p class="text-lg text-gray-500 font-medium mb-6">
            Belajar : {{ course.category?.subject?.name ?? "-" }} | Guru:
            {{ course.teacher?.name ?? "-" }}
          </p>
        </div>

        <!-- Video Trailer -->
        <div
          v-if="course.path_trailer"
          class="rounded-xl overflow-hidden shadow-md mb-6"
        >
          <iframe
            :src="convertToEmbedUrl(course.path_trailer)"
            class="w-full aspect-video rounded-xl"
            allowfullscreen
          ></iframe>
        </div>
        <div v-else class="text-center text-gray-400 italic mb-8">
          🚫 Video trailer tidak tersedia.
        </div>
        <!-- Tabs Section -->
        <div class="mb-8">
          <!-- Tab Buttons -->
          <div class="flex space-x-4 mb-6">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="activeTab = tab"
              :class="[
                'px-6 py-2 rounded-full text-sm font-semibold',
                activeTab === tab
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
              ]"
            >
              {{ tab }}
            </button>
          </div>

          <!-- Tab Content -->
          <div
            class="bg-white p-6 rounded-xl shadow-md text-gray-800 leading-relaxed space-y-4"
          >
            <div v-if="activeTab === 'About'">
              <h4 class="text-xl font-bold">Deskripsi Kelas</h4>
              <p>{{ course.about }}</p>
            </div>
            <div v-else-if="activeTab === 'Lessons'">
              <h4 class="text-xl font-bold">Rencana Pelajaran</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Pengantar & Tujuan Pembelajaran</li>
                <li>Pengenalan Topik Utama</li>
                <li>Latihan Praktik & Evaluasi</li>
              </ul>
            </div>
            <div v-else-if="activeTab === 'Tools'">
              <h4 class="text-xl font-bold">Alat & Teknologi</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Visual Studio Code</li>
                <li>Tailwind CSS</li>
                <li>Git & GitHub</li>
                <li>Node.js & npm</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Alert -->
        <div v-if="alert.message" :class="`alert ${alert.type}`">
          {{ alert.message }}
        </div>
      </div>

      <!-- Kanan: Panel Aksi -->
      <div
        class="bg-white p-6 md:p-8 rounded-2xl shadow-xl sticky top-28 h-fit"
      >
        <h3 class="text-lg font-semibold text-gray-800 mb-4">🧭 Status</h3>
        <ul class="space-y-2 text-sm text-gray-600 mb-6">
          <li>⏱️ Durasi: 9.7 jam</li>
          <li>🎥 99 Video</li>
          <li>📦 Materi Lengkap</li>
        </ul>

        <div class="text-center">
          <button
            v-if="isEnrolled"
            @click="goToLearning"
            class="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            🎓 Mulai Belajar
          </button>

          <p
            v-else-if="hasPendingPayment"
            class="text-orange-600 font-medium italic mt-4"
          >
            ⏳ Menunggu verifikasi pembayaran...
          </p>

          <button
            v-else
            @click="checkout"
            class="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Beli Kelas - {{ course?.price ?? "-" }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <BaseFooter />
</template>


<script>
import BaseNavbar from "@/components/BaseNavbar.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "CourseDetail",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  components: {
    BaseNavbar,
    BaseFooter,
  },
  data() {
    return {
      course: {
        name: "",
        about: "",
        category: null,
        teacher: null,
        thumbnail: null,
        path_trailer: "",
        price: "",
      },
      isEnrolled: false,
      hasPendingPayment: false,
      alert: {
        message: "",
        type: "", // alert-success, alert-error, alert-info
      },

      // 👇 Untuk fitur Tab
      activeTab: "About",
      tabs: ["About", "Lessons", "Tools"],
    };
  },
  mounted() {
    this.fetchCourse();
    this.checkAuth();
  },
  methods: {
    fetchCourse() {
      fetch(`http://elspace.test/api/courses/${this.id}`)
        .then((res) => res.json())
        .then((data) => {
          this.course = data.course;
        })
        .catch(() => {
          this.alert.message = "Gagal memuat data kursus.";
          this.alert.type = "alert-error";
        });
    },

    checkAuth() {
      const token = localStorage.getItem("token");
      if (!token) return;

      fetch("http://elspace.test/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then(() => {
          return fetch(`http://elspace.test/api/enrollments/check/${this.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        })
        .then((res) => res.json())
        .then((data) => {
          this.isEnrolled = data.enrolled;
          this.hasPendingPayment = data.pending;
        })
        .catch(() => {});
    },

    convertToEmbedUrl(url) {
      if (!url) return "";
      if (url.includes("youtube.com/watch?v=")) {
        const videoId = url.split("v=")[1].split("&")[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      if (url.includes("youtu.be/")) {
        const videoId = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return url;
    },

    goToLearning() {
      this.$router.push(`/learn/${this.id}`);
    },

    checkout() {
      this.$router.push(`/checkout/${this.id}`);
    },
  },
};
</script>

<style scoped>
.alert {
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 16px;
}
.alert-success {
  background-color: #d4edda;
  color: #155724;
}
.alert-error {
  background-color: #f8d7da;
  color: #721c24;
}
.alert-info {
  background-color: #cce5ff;
  color: #004085;
}
</style>
