<template>
  <section class="bg-gradient-to-br from-indigo-50 to-white py-24 relative overflow-hidden text-center">
    <!-- Background Blur -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="absolute -top-20 -left-20 w-96 h-96 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>
      <div class="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 opacity-20 blur-2xl rounded-full"></div>
    </div>

    <!-- Form Container -->
    <div class="relative z-10 max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-indigo-100">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-2">Buat Akun Baru 🚀</h2>
      <p class="text-gray-600 mb-6">Daftar dan mulai belajar bersama <span class="text-indigo-600 font-semibold">Elspace</span></p>

      <form>
        <div class="mb-4 text-left">
          <label class="block text-gray-700 font-medium mb-1">Nama Lengkap</label>
          <input type="text" class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Nama Anda" />
        </div>

        <div class="mb-4 text-left">
          <label class="block text-gray-700 font-medium mb-1">Email</label>
          <input type="email" class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
        </div>

        <div class="mb-6 text-left">
          <label class="block text-gray-700 font-medium mb-1">Password</label>
          <input type="password" class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Buat password" />
        </div>

        <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-full transition-all shadow-md">
          Daftar Sekarang
        </button>
      </form>

      <p class="text-sm text-gray-600 mt-6">
        Sudah punya akun?
        <router-link to="/login" class="text-indigo-600 font-semibold hover:underline">Masuk di sini</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegisterPage'
}
</script>
