
<template>
  <div class="Course font-[Poppins]">
    <BaseNavbar />

    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-indigo-100 to-white py-24 relative overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1
          class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
        >
          Find Your Next Favorite Course
        </h1>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          Temukan materi yang bikin kamu excited to learn — mulai dari Coding,
          Math, English, Science, hingga Creative Skills.
        </p>
      </div>
    </section>

    <!-- Course List Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Filter Controls -->
        <div
          class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <!-- Search Box -->
          <div class="relative">
            <input
              v-model="search"
              type="text"
              placeholder="Search course..."
              class="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <i
              class="fas fa-search absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
            ></i>
          </div>

          <!-- Subject Filter -->
          <div>
            <select
              v-model="selectedSubject"
              class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="">All Subjects</option>
              <option
                v-for="subject in subjects"
                :key="subject.id"
                :value="subject.id"
              >
                {{ subject.name }}
              </option>
            </select>
          </div>

          <!-- Category Filter -->
          <div>
            <select
              v-model="selectedCategory"
              class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="">All Categories</option>
              <option
                v-for="cat in filteredCategories"
                :key="cat.id"
                :value="cat.slug"
              >
                {{ cat.name }}
              </option>
            </select>
          </div>
        </div>
        <!-- Course Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <div
            v-for="(course, index) in visibleCourses"
            :key="index"
            class="bg-white rounded-2xl border shadow-sm hover:shadow-md transition duration-300 overflow-hidden group"
          >
            <!-- BUNGKUS GAMBAR + JUDUL PAKAI LINK -->
            <router-link
              :to="{ name: 'CourseDetail', params: { id: course.id } }"
              class="block"
            >
              <img
                :src="course.image"
                :alt="course.title"
                class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                onerror="this.onerror=null;this.src='/images/k.jpg';"
              />
              <div class="p-5">
                <h3
                  class="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition"
                >
                  {{ course.title }}
                </h3>
              </div>
            </router-link>

            <!-- DESKRIPSI DAN META INFO DI LUAR LINK -->
            <div class="px-5 pb-5">
              <p class="text-sm text-gray-600 line-clamp-3">
                {{ course.desc }}
              </p>
              <div class="mt-4 flex justify-between text-sm text-gray-500">
                <span
                  ><i class="fas fa-clock mr-1"></i>{{ course.duration }}</span
                >
                <span
                  ><i class="fas fa-star text-yellow-400 mr-1"></i
                  >{{ course.rating }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div
          class="text-center mt-10"
          v-if="filteredCourses.length > currentIndex + perPage"
        >
          <button
            @click="loadMore"
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow transition"
          >
            Load More Courses
          </button>
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
  name: "CoursePage",
  components: { BaseNavbar, BaseFooter },
  data() {
    return {
      search: "",
      selectedCategory: "",
      selectedSubject: "",
      perPage: 8,
      currentIndex: 0,
      allCourses: [],
      categories: [],
      subjects: [],
    };
  },
  computed: {
    filteredCourses() {
      return this.allCourses.filter((course) => {
        const keywordMatch = course.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
        const categoryMatch = this.selectedCategory
          ? course.categorySlug === this.selectedCategory
          : true;
        const subjectMatch = this.selectedSubject
          ? course.subjectId === this.selectedSubject
          : true;
        return keywordMatch && categoryMatch && subjectMatch;
      });
    },
    visibleCourses() {
      return this.filteredCourses.slice(0, this.currentIndex + this.perPage);
    },
    filteredCategories() {
      if (!this.selectedSubject) return this.categories;
      return this.categories.filter(
        (cat) => cat.subject && cat.subject.id === this.selectedSubject
      );
    },
  },
  methods: {
    loadMore() {
      this.currentIndex += this.perPage;
    },
  },
  mounted() {
    this.currentIndex = 0;
    fetch("http://elspace.test/api/available-courses")
      .then((response) => {
        if (!response.ok) throw new Error("Gagal ambil data");
        return response.json();
      })
      .then((data) => {
        const defaultImage = "/images/k.jpg";

        this.allCourses = data.courses.map((course) => {
          return {
            id: course.id,
            title: course.name,
            image: course.thumbnail ? course.thumbnail : defaultImage,
            desc: course.about?.slice(0, 100) + "...",
            duration: course.duration || "N/A",
            rating: course.rating || "4.8",
            categorySlug: course.category?.slug || "",
            subjectId: course.category?.subject?.id || null,
          };
        });

        this.categories = data.categories;

        const subjectMap = new Map();
        data.categories.forEach((cat) => {
          if (cat.subject) {
            subjectMap.set(cat.subject.id, cat.subject);
          }
        });
        this.subjects = Array.from(subjectMap.values());
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>


<style scoped>
body {
  font-family: "Poppins", sans-serif;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
