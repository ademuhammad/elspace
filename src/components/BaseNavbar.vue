<template>
  <nav
    class="bg-indigo-50/90 backdrop-blur-md shadow-md sticky top-0 z-50 transition duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2">
        <img
          src="/images/elspace-removebg-preview.png"
          alt="Elspace Logo"
          class="h-8 md:h-10 object-contain"
        />
      </router-link>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        <li>
          <router-link to="/" :class="navLinkClass('/')"> Home </router-link>
        </li>
        <li>
          <router-link to="/Course" :class="navLinkClass('/Course')">
            Courses
          </router-link>
        </li>
        <li>
          <router-link to="/About" :class="navLinkClass('/About')">
            About
          </router-link>
        </li>
     
      </ul>

      <!-- Auth Buttons (Desktop) -->
      <div class="hidden md:flex items-center gap-3">
        <router-link
          to="/login"
          class="text-indigo-600 font-semibold px-4 py-2 rounded-full hover:bg-indigo-50 transition"
        >
          Login
        </router-link>
        <router-link
          to="/Register"
          class="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-indigo-700 transition shadow"
        >
          Sign Up
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden focus:outline-none text-gray-700"
      >
        <i class="fas fa-bars text-xl"></i>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="fade">
      <div v-if="showMenu" class="md:hidden bg-white shadow-md px-6 pb-4 pt-2">
        <ul class="flex flex-col gap-4 text-gray-700 text-base font-medium">
          <li>
            <router-link to="/" @click="closeMenu" :class="navLinkClass('/')"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/Course"
              @click="closeMenu"
              :class="navLinkClass('/Course')"
              >Courses</router-link
            >
          </li>
          <li>
            <router-link
              to="/About"
              @click="closeMenu"
              :class="navLinkClass('/About')"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              to="/CourseDetail"
              @click="closeMenu"
              :class="navLinkClass('/CourseDetail')"
              >Details</router-link
            >
          </li>
        </ul>
        <div class="mt-4 flex flex-col gap-2">
          <router-link
            to="/login"
            class="text-indigo-600 font-semibold text-center py-2 rounded hover:bg-indigo-50"
            @click="closeMenu"
          >
            Login
          </router-link>
          <router-link
            to="/Register"
            class="bg-indigo-600 text-white text-center font-semibold py-2 rounded hover:bg-indigo-700"
            @click="closeMenu"
          >
            Sign Up
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
    navLinkClass(path) {
      return {
        "text-indigo-600 font-semibold": this.$route.path === path,
        "hover:text-indigo-600 transition": true,
      };
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
