<template>
  <footer class="bg-white text-gray-600 pt-16 pb-8">
    <!-- Top Grid -->
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm"
    >
      <!-- Subjects -->
      <div>
        <h3 class="font-semibold text-gray-800 mb-3">Subjects</h3>
        <ul class="space-y-2">
          <li><a href="#">Coding</a></li>
          <li><a href="#">English</a></li>
          <li><a href="#">Math</a></li>
          <li><a href="#">Sains</a></li>
        </ul>
      </div>

      <!-- Learning Path -->
      <div>
        <h3 class="font-semibold text-gray-800 mb-3">Learning Path</h3>
        <ul class="space-y-2">
          <li><a href="#">Beginner</a></li>
          <li><a href="#">Intermediate</a></li>
          <li><a href="#">Advanced</a></li>
        </ul>
      </div>

      <!-- For -->
      <div>
        <h3 class="font-semibold text-gray-800 mb-3">For</h3>
        <ul class="space-y-2">
          <li><a href="#">Students</a></li>
          <li><a href="#">Teachers</a></li>
          <li><a href="#">Professionals</a></li>
        </ul>
      </div>

      <!-- Features -->
      <div>
        <h3 class="font-semibold text-gray-800 mb-3">Features</h3>
        <ul class="space-y-2">
          <li><a href="#">Interactive Courses</a></li>
          <li><a href="#">Quizzes & Certificates</a></li>
          <li><a href="#">Mentoring</a></li>
        </ul>
      </div>

      <!-- Resources -->
      <!-- <div>
        <h3 class="font-semibold text-gray-800 mb-3">Resources</h3>
        <ul class="space-y-2">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Events</a></li>
        </ul>
      </div> -->

      <!-- Company -->
      <!-- <div>
        <h3 class="font-semibold text-gray-800 mb-3">Company</h3>
        <ul class="space-y-2">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Partnership</a></li>
        </ul>
      </div> -->
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-200 my-8"></div>

    <!-- Contact Row -->
    <!-- <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0 text-gray-500">
      <div class="flex items-center space-x-4">
        <i class="fas fa-phone-alt"></i>
        <span>022-2010606</span>
        <i class="fab fa-whatsapp"></i>
        <span>+62 811 2222 656</span>
        <i class="fas fa-envelope"></i>
        <span>info@elspace.id</span>
        <i class="fas fa-map-marker-alt"></i>
        <span>Jl. Inovasi Digital No. 88, Bandung</span>
      </div>
    </div> -->

    <!-- Logo + Description -->
    <div class="text-center mt-10">
      <img
        src="/images/elspace-removebg-preview.png"
        class="h-10 mx-auto mb-4"
      />
      <p class="text-sm text-gray-500 max-w-xl mx-auto">
        Elspace adalah platform pembelajaran teknologi interaktif.
        Transformasikan masa depanmu bersama Elspace — belajar teknologi dengan
        cara menyenangkan dan efektif.
      </p>

      <!-- Sosial Media -->
      <div class="flex justify-center space-x-6 mt-6 text-lg text-gray-500">
        <a href="#"><i class="fab fa-facebook hover:text-indigo-600"></i></a>
        <a href="#"><i class="fab fa-instagram hover:text-pink-500"></i></a>
        <a href="#"><i class="fab fa-twitter hover:text-sky-500"></i></a>
        <a href="#"><i class="fab fa-youtube hover:text-red-500"></i></a>
        <a href="#"><i class="fab fa-linkedin hover:text-blue-700"></i></a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-8 text-center text-xs text-gray-400">
      &copy; 2025 Elspace. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "BaseFooter",
};
</script>
