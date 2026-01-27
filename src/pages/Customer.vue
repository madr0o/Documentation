<script setup>
    import { EyeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="flex flex-col pb-10 justify-start gap-6">
        <p>Menu Customers digunakan untuk melihat dan mengelola data pelanggan yang telah terdaftar di website. Melalui menu ini, pengguna dapat memantau jumlah pelanggan, pelanggan baru, serta status verifikasi secara ringkas melalui kartu ringkasan di bagian atas halaman.</p>
        <p>Pada halaman Customers Management, pengguna dapat:</p>
        <ul class="list-disc pl-8">
            <li>Melihat daftar seluruh customer yang terdaftar lengkap dengan informasi dasar seperti nama, Customer ID, email, nomor telepon, jumlah wishlist, jumlah order, dan total pengeluaran.</li>
            <li>Menggunakan fitur pencarian untuk mencari customer berdasarkan nama pelanggan dengan cepat.</li>
            <li>Mengakses detail customer dengan menekan ikon mata <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><EyeIcon class="h-4 w-4" /></span> pada kolom aksi.</li>
        </ul>
        <p>Di halaman Detail Customer, pengguna dapat melihat informasi lengkap pelanggan yang mencakup:</p>
        <ul class="list-disc pl-8">
            <li>Username dan email akun pelanggan.</li>
            <li>Tanggal lahir (Date of Birth) dan informasi kontak.</li>
            <li>Level loyalty program yang dimiliki pelanggan.</li>
            <li>Wishlist pelanggan.</li>
            <li>Cart customer (keranjang belanja).</li>
            <li>Histori order yang pernah dilakukan.</li>
            <li>Alamat pengiriman (shipping address) dan alamat penagihan (billing address).</li>
        </ul>
    </div>
</template>